import getSystemInfo from '../utils/getSystemInfo.js';
import { showFolder, showWrong } from '../utils/message.js';
import * as fileSystem from '../utils/fileSystem.js';

const handleLine = async (line) => {
	let [point, ...data] = line.trim().split(/\s+/);

	switch (true) {
		case point === 'up' && data.length === 0:
			process.chdir('..');
			break;

		case point === 'os' && data.length === 1:
			getSystemInfo(data);
			break;

		case point === 'cd' && data.length === 1:
			fileSystem.moveToDir(data);
			break;

		case point === '.exit':
			showFolder();
			process.exit();

		default:
			showWrong();
	}

	showFolder();
};

export default handleLine;
