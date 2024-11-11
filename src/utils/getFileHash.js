import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import handleError from '../handlers/handleError.js';

const getFileHash = ([target]) => {
	const readStream = createReadStream(target);

	readStream.on('error', handleError);

	const hash = createHash('sha256');

	readStream.pipe(hash).on('finish', () => console.log(hash.digest('hex')));
};

export default getFileHash;
