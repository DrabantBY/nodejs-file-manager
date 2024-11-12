import { createReadStream, createWriteStream } from 'node:fs';
import handleTarget from '../handlers/handleTarget.js';

const copyFile = (args) =>
	new Promise((resolve, reject) => {
		const [source, target] = handleTarget(args);

		const readStream = createReadStream(source);
		readStream.on('error', reject);

		const writeStream = createWriteStream(target, { flags: 'wx' });
		writeStream.on('error', reject);

		readStream.pipe(writeStream).on('finish', resolve);
	});

export default copyFile;
