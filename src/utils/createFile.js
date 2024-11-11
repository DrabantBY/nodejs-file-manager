import { open } from 'node:fs/promises';

const createFile = async ([target]) => {
	const file = await open(target, 'wx');
	await file.close();
};

export default createFile;
