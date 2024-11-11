import getSystemInfo from '../utils/getSystemInfo.js';
import * as message from '../utils/message.js';
import * as fileSystem from '../utils/fileSystem.js';
import addSpace from '../utils/addSpace.js';

const handleLine = async (line) => {
	const [point, ...data] = line.trim().split(/\s+/);

	const target = data.length > 0 ? data.map(addSpace) : data;

	try {
		switch (true) {
			case point === 'cd' && target.length === 1:
				fileSystem.moveToDir(target);
				break;

			case point === 'hash' && target.length === 1:
				fileSystem.getFileHash(target);
				break;

			case point === 'ls' && target.length === 0:
				await fileSystem.showFolderInside();
				break;

			case point === 'os' && target.length === 1:
				getSystemInfo(target);
				break;

			case point === 'up' && target.length === 0:
				process.chdir('..');
				break;

			case point === '.exit' && target.length === 0:
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
