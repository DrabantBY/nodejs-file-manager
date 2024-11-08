import getSystemInfo from '../utils/getSystemInfo.js';
import { showFolder, showWrong } from '../utils/message.js';

const handleLine = async (line) => {
	let [point, ...data] = line.trim().split(/\s+/);

	switch (true) {
		case point === 'os' && data.length === 1:
			getSystemInfo(data);
			break;

		case point === 'up' && data.length === 0:
			process.chdir('.');
			break;

		default:
			showWrong();
	}

	showFolder();
};

export default handleLine;
