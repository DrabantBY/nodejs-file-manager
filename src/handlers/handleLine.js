import * as message from '../message.js';
import * as fileSystem from '../fileSystem.js';
import handleArgs from './handleArgs.js';
import validateArgs from './validateArgs.js';
import pointersMap from '../pointersMap.js';

const handleLine = async (line) => {
	const args = handleArgs(line);
	const isValidArgs = validateArgs(args);

	try {
		if (isValidArgs) {
			const [key, ...values] = args;
			await pointersMap[key](values);
		} else {
			message.showWrong();
		}
	} catch {
		message.showError();
	}

	message.showFolder();
};

export default handleLine;
