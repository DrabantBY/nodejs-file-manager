import { createReadStream, createWriteStream } from 'node:fs';
import joinPaths from '../handlers/joinPaths.js';

const copyFile = ([source, folder]) =>
	new Promise((resolve, reject) => {
		const target = joinPaths(source, folder);

		const readStream = createReadStream(source);
		readStream.on('error', reject);

		const writeStream = createWriteStream(target, { flags: 'wx' });
		writeStream.on('error', reject);

		readStream.pipe(writeStream).on('finish', resolve);
	});

export default copyFile;
