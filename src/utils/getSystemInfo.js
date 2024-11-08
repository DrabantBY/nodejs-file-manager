import { EOL, cpus, userInfo } from 'node:os';
import { showWrong } from './message.js';

const getSystemInfo = ([arg]) => {
	switch (arg) {
		case '--EOL':
			console.log(`Default system End-Of-Line is ${JSON.stringify(EOL)}`);
			break;

		case '--cpus':
			const cores = cpus().map(({ model, speed }) => ({
				'CPU model': model,
				'clock rate': speed / 1000 + 'GHz',
			}));

			console.log(`Overall amount of CPUS is ${cores.length}`);
			console.table(cores);
			break;

		case '--homedir':
			console.log(`Current system home folder is ${userInfo().homedir}`);
			break;

		case '--username':
			console.log(`Current system user name is ${userInfo().username}`);
			break;

		case '--architecture':
			console.log(`CPU architecture is ${process.arch}`);
			break;

		default:
			showWrong();
	}
};

export default getOs;
