import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';
import handleError from '../handlers/handleError.js';
import handleTarget from '../handlers/handleTarget.js';

const zipFile = async (point, args) => {
	const [source, target] = handleTarget(args);

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
