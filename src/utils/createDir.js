import { mkdir } from 'node:fs/promises';

const createDir = async ([target]) => {
	await mkdir(target);
};

export default createDir;
