import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const getFileHash = ([target]) =>
	new Promise((resolve, reject) => {
		const readStream = createReadStream(target);
		readStream.on('error', reject);

		const hash = createHash('sha256');

		readStream.pipe(hash).on('finish', () => resolve(hash.digest('hex')));
	}).then(console.log);

export default getFileHash;
