import * as manager from './manager.js';

const pointers = {
	add: manager.createFile,
	cat: manager.readFile,
	cd: manager.changeDir,
	cp: manager.copyFile,
	compress: manager.zipFile,
	decompress: manager.unzipFile,
	hash: manager.getFileHash,
	ls: manager.showSubDir,
	mkdir: manager.createDir,
	mv: manager.moveFile,
	os: manager.getOsInfo,
	rm: manager.removeDir,
	rn: manager.renameFile,
	up: async () => {
		process.chdir('..');
	},
	'.exit': async () => {
		process.exit();
	},
};

export default pointers;
