import { sep } from 'node:path';

const changeDir = async ([target]) => {
	const isRoot = /^[a-z]\:$/i.test(target);

	const folder = isRoot ? target + sep : target;

	process.chdir(folder);
};

export default changeDir;
