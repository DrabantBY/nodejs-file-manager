import { readdir, open, mkdir, rm, rename, access } from 'node:fs/promises';
import { sep, dirname, join } from 'node:path';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

import handleReadError from '../handlers/handleReadError.js';

export const moveToDir = ([target]) => {
	const isRoot = /^[a-z]\:$/i.test(target);

	const folder = isRoot ? target + sep : target;

	process.chdir(folder);
};

export const showDirInside = async () => {
	const folder = process.cwd();

	const content = await readdir(folder, {
		recursive: true,
		withFileTypes: true,
	});

	const list = content.map((dirent) => ({
		name: dirent.name,
		type: dirent.isFile() ? 'file' : dirent.isDirectory() ? 'directory' : null,
	}));

	const table = list
		.filter(({ type }) => type !== null)
		.sort((a, b) => {
			if (a.type > b.type) return 1;
			if (a.type < b.type) return -1;

			return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
		});

	console.table(table);
};

export const getFileHash = ([target]) => {
	const readStream = createReadStream(target);

	readStream.on('error', handleReadError);

	const hash = createHash('sha256');

	readStream.pipe(hash).on('finish', () => console.log(hash.digest('hex')));
};

export const readFile = ([target]) => {
	const readStream = createReadStream(target);

	readStream.on('error', handleReadError);

	readStream.on('end', () => console.log('\n'));

	readStream.pipe(process.stdout);
};

export const createFile = async ([target]) => {
	const file = await open(target, 'wx');

	await file.close();
};

export const createDir = async ([target]) => {
	await mkdir(target);
};

export const removeDir = async ([target]) => {
	await rm(target, { recursive: true });
};

export const renameFile = async ([source, name]) => {
	const folder = dirname(source);
	const target = join(folder, name);

	try {
		await access(target);

		throw new Error();
	} catch (err) {
		if (err.code === 'ENOENT') {
			await rename(source, target);
		} else {
			throw err;
		}
	}
};
