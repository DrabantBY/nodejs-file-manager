import copyFile from './copyFile.js';
import removeDir from './removeDir.js';

const moveFile = async (args) => {
	await copyFile(args);
	await removeDir(args);
};

export default moveFile;
