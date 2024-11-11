import getSystemInfo from '../utils/getSystemInfo.js';
import * as message from '../utils/message.js';
import * as fileSystem from '../utils/fileSystem.js';

const handleLine = async (line) => {
	let [point, ...data] = line.trim().split(/\s+/);

	try {
		switch (true) {
			case point === 'cd' && data.length === 1:
				fileSystem.moveToDir(data);
				break;

			case point === 'hash' && data.length === 1:
				fileSystem.getFileHash(data);
				break;

			case point === 'ls' && data.length === 0:
				await fileSystem.showFolderInside();
				break;

			case point === 'os' && data.length === 1:
				getSystemInfo(data);
				break;

			case point === 'up' && data.length === 0:
				process.chdir('..');
				break;

			case point === '.exit':
				showFolder();
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
