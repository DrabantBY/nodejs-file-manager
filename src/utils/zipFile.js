import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';

import handleTarget from '../handlers/handleTarget.js';

const zipFile = (point, args) =>
	new Promise((resolve, reject) => {
		const [source, target] = handleTarget(args);

		const readStream = createReadStream(source);
		readStream.on('error', reject);

		const writeStream = createWriteStream(target, { flags: 'wx' });
		writeStream.on('error', reject);

		let zip;

		if (point === 'compress') {
			zip = createBrotliCompress();
		}

		if (point === 'decompress') {
			zip = createBrotliDecompress();
		}

		readStream.pipe(zip).pipe(writeStream).on('finish', resolve);
	});

export default zipFile;
