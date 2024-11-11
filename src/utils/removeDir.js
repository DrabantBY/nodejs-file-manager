import { rm } from 'node:fs/promises';

const removeDir = async ([target]) => {
	await rm(target, { recursive: true });
};

export default removeDir;
