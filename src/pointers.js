import * as fileSystem from './fileSystem.js';

const pointers = {
	add: fileSystem.createFile,
	cat: fileSystem.readFile,
	cd: fileSystem.changeDir,
	cp: fileSystem.copyFile,
	compress: fileSystem.zipFile,
	decompress: fileSystem.unzipFile,
	hash: fileSystem.getFileHash,
	ls: fileSystem.showSubDir,
	mkdir: fileSystem.createDir,
	mv: fileSystem.moveFile,
	os: fileSystem.getOsInfo,
	rm: fileSystem.removeDir,
	rn: fileSystem.renameFile,
	up: async () => {
		process.chdir('..');
	},
	'.exit': async () => {
		process.exit();
	},
};

export default pointers;
