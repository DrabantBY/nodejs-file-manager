import { stdin as input, stdout as output } from 'node:process';
import { createInterface } from 'node:readline/promises';
import { homedir } from 'node:os';
import parseLine from './handlers/parseLine.js';
import * as message from './message.js';

let [key, value] = process.argv.at(-1).split(/\=+/);

if (key !== '--username') {
	message.showError();
} else {
	const user = value || 'Stranger';

	process.chdir(homedir());
	process.on('exit', () => {
		message.showGoodbye(user);
	});

	message.showGreeting(user);
	message.showFolder();

	const readLine = createInterface({ input, output });
	readLine.on('line', parseLine);
}
