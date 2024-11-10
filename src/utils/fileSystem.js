import { readdir } from 'node:fs/promises';
import { sep } from 'node:path';
import addSpace from './addSpace.js';

export const moveToDir = ([target]) => {
	const isRoot = /^[a-z]\:$/i.test(target);
	const folder = isRoot ? target + sep : addSpace(target);

	process.chdir(folder);
};

export const showFolderInside = async () => {
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
