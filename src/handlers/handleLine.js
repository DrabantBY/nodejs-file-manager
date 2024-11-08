import getSystemInfo from '../utils/getSystemInfo.js';
import { showFolder } from '../utils/message.js';

const handleLine = async (line) => {
	let [point, ...data] = line.trim().split(/\s+/);

	switch (true) {
		case point === 'os' && data.length === 1:
			getSystemInfo(data);
			break;
	}

	showFolder();
};

export default handleLine;
