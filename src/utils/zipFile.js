import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';

import handleTarget from '../handlers/handleTarget.js';

const zipFile = (args) =>
	new Promise((resolve, reject) => {
		const [source, target] = handleTarget(args);

		const readStream = createReadStream(source);
		readStream.on('error', reject);

		const writeStream = createWriteStream(target, { flags: 'wx' });
		writeStream.on('error', reject);

		const zip = createBrotliCompress();

		readStream.pipe(zip).pipe(writeStream).on('finish', resolve);
	});

export default zipFile;
