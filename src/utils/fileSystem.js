import { showError } from './message.js';

export const moveToDir = ([target]) => {
	try {
		const folder = target.replaceAll('*', ' ');
		process.chdir(folder);
	} catch {
		showError();
	}
};
