import { readdir } from 'node:fs/promises';
import { showError } from './message.js';

export const moveToDir = ([target]) => {
	try {
		const folder = target.replaceAll('*', ' ');
		process.chdir(folder);
	} catch {
		showError();
	}
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
