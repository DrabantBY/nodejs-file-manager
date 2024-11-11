import * as message from '../utils/message.js';
import * as fileSystem from '../utils/fileSystem.js';
import getSystemInfo from '../utils/getSystemInfo.js';
import addSpace from './addSpace.js';

const readeLine = async (line) => {
	const [point, ...data] = line.trim().split(/\s+/);

	const path = data.length > 0 ? data.map(addSpace) : data;

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
				await fileSystem.showFolderInside();
				break;

			case point === 'os' && path.length === 1:
				getSystemInfo(path);
				break;

			case point === 'rm' && path.length === 1:
				await fileSystem.removeDir(path);
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

export default readeLine;
