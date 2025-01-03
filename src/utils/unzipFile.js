import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import joinPaths from '../handlers/joinPaths.js';

const unzipFile = ([source, folder]) =>
	new Promise((resolve, reject) => {
		const target = joinPaths(source, folder);

		const readStream = createReadStream(source);
		readStream.on('error', reject);

		const writeStream = createWriteStream(target, { flags: 'wx' });
		writeStream.on('error', reject);

		const zip = createBrotliDecompress();

		readStream.pipe(zip).pipe(writeStream).on('finish', resolve);
	});

export default unzipFile;
