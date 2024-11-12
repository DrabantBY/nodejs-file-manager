import { dirname, join } from 'node:path';
import { rename, access } from 'node:fs/promises';

const renameFile = async ([source, name]) => {
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

export default renameFile;
