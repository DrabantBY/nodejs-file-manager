import * as message from '../message.js';
import * as fileSystem from '../fileSystem.js';
import handleSpace from './handleSpace.js';

const handleLine = async (line) => {
	const [point, ...data] = line.trim().split(/\s+/);

	const args = handleSpace(data);

	// try {
	switch (true) {
		case point === 'add' && args.length === 1:
			await fileSystem.createFile(args);
			break;

		case point === 'cat' && args.length === 1:
			fileSystem.readFile(args);
			break;

		case point === 'cd' && args.length === 1:
			fileSystem.changeDir(args);
			break;

		case point === 'cp' && args.length === 2:
			fileSystem.copyFile(args);

		case (point === 'compress' || point === 'decompress') && args.length === 2:
			await fileSystem.zipFile(point, args);
			break;

		case point === 'hash' && args.length === 1:
			fileSystem.getFileHash(args);
			break;

		case point === 'mkdir' && args.length === 1:
			await fileSystem.createDir(args);
			break;

		case point === 'ls' && args.length === 0:
			await fileSystem.showSubDir();
			break;

		case point === 'os' && args.length === 1:
			fileSystem.getOsInfo(args);
			break;

		case point === 'rm' && args.length === 1:
			await fileSystem.removeDir(args);
			break;

		case point === 'rn' && args.length === 2:
			await fileSystem.renameFile(args);
			break;

		case point === 'up' && args.length === 0:
			process.chdir('..');
			break;

		case point === '.exit' && args.length === 0:
			message.showFolder();
			process.exit();

		default:
			message.showWrong();
	}
	// } catch {
	// 	message.showError();
	// }

	message.showFolder();
};

export default handleLine;
