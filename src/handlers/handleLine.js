import * as message from '../message.js';
import * as fileSystem from '../fileSystem.js';
import getSystemInfo from '../utils/getOsInfo.js';
import handleSpace from './handleSpace.js';

const handleLine = async (line) => {
	const [point, ...data] = line.trim().split(/\s+/);

	const path = data.length > 0 ? data.map(handleSpace) : data;

	try {
		switch (true) {
			case point === 'add' && path.length === 1:
				await fileSystem.createFile(path);
				break;

			case point === 'cat' && path.length === 1:
				fileSystem.readFile(path);
				break;

			case point === 'cd' && path.length === 1:
				fileSystem.moveToDir(path);
				break;

			case point === 'hash' && path.length === 1:
				fileSystem.getFileHash(path);
				break;

			case point === 'mkdir' && path.length === 1:
				await fileSystem.createDir(path);
				break;

			case point === 'ls' && path.length === 0:
				await fileSystem.showDirInside();
				break;

			case point === 'os' && path.length === 1:
				getSystemInfo(path);
				break;

			case point === 'rm' && path.length === 1:
				await fileSystem.removeDir(path);
				break;

			case point === 'rn' && path.length === 2:
				await fileSystem.renameFile(path);
				break;

			case point === 'up' && path.length === 0:
				process.chdir('..');
				break;

			case point === '.exit' && path.length === 0:
				message.showFolder();
				process.exit();

			default:
				message.showWrong();
		}
	} catch {
		message.showError();
	}

	message.showFolder();
};

export default handleLine;
