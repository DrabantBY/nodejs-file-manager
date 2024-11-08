import { stdin as input, stdout as output } from 'node:process';
import { createInterface } from 'node:readline/promises';
import { homedir } from 'node:os';

import { getUser } from './utils/getUser.js';
import * as message from './utils/message.js';

const user = getUser();

if (user) {
	process.chdir(homedir());

	message.showGreeting(user);

	message.showFolder();

	const readLine = createInterface({ input, output });

	readLine.on('SIGINT', () => {
		message.showGoodbye(user);
		process.exit();
	});
} else {
	message.showError();
}
