import { createReadStream } from 'node:fs';
import handleError from '../handlers/handleError.js';

const readFile = ([target]) => {
	const readStream = createReadStream(target);

	readStream.on('error', handleError);

	readStream.on('end', () => console.log('\n'));

	readStream.pipe(process.stdout);
};

export default readFile;
