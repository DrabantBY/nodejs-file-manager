import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import joinPaths from '../handlers/joinPaths.js';

const zipFile = ([source, folder]) =>
	new Promise((resolve, reject) => {
		const target = joinPaths(source, folder);

		const readStream = createReadStream(source);
		readStream.on('error', reject);

		const writeStream = createWriteStream(target, { flags: 'wx' });
		writeStream.on('error', reject);

		const zip = createBrotliCompress();

		readStream.pipe(zip).pipe(writeStream).on('finish', resolve);
	});

export default zipFile;
