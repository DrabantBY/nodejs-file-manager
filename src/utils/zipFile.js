import { parse, resolve } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';
import handleError from '../handlers/handleError.js';

const zipFile = (point, [source, folder]) => {
	const { base } = parse(source);
	const target = resolve(folder, base);

	const readStream = createReadStream(source);
	readStream.on('error', handleError);

	const writeStream = createWriteStream(target);
	writeStream.on('error', handleError);

	let zip;

	if (point === 'compress') {
		zip = createBrotliCompress();
	}

	if (point === 'decompress') {
		zip = createBrotliDecompress();
	}

	readStream.pipe(zip).pipe(writeStream);
};

export default zipFile;
