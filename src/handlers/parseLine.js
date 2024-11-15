import * as message from '../message.js';
import splitLine from './splitLine.js';
import checkArgs from './checkArgs.js';
import pointers from '../pointers.js';

const parseLine = async (line) => {
	const args = splitLine(line);
	const isValidArgs = checkArgs(args);

	try {
		if (isValidArgs) {
			const [key, ...values] = args;
			await pointers[key](values);
		} else {
			message.showWrong();
		}
	} catch {
		message.showError();
	}

	message.showFolder();
};

export default parseLine;
