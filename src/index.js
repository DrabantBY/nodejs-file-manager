import { stdin as input, stdout as output } from 'node:process';
import { createInterface } from 'node:readline/promises';
import { homedir } from 'node:os';

import getCurrentUser from './utils/getCurrentUser.js';
import handleLine from './handlers/handleLine.js';
import * as message from './utils/message.js';

const user = getCurrentUser();

if (user) {
	process.chdir(homedir());

	message.showGreeting(user);

	message.showFolder();

	const readLine = createInterface({ input, output });

	readLine.on('line', handleLine);

	readLine.on('SIGINT', () => {
		message.showGoodbye(user);
		process.exit();
	});
} else {
	message.showError();
}
