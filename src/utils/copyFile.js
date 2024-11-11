import { createReadStream, createWriteStream } from 'node:fs';
import handleError from '../handlers/handleError.js';
import handleTarget from '../handlers/handleTarget.js';

const copyFile = (args) => {
	const [source, target] = handleTarget(args);

	const readStream = createReadStream(source);
	readStream.on('error', handleError);

	const writeStream = createWriteStream(target);
	writeStream.on('error', handleError);

	readStream.pipe(writeStream);
};

export default copyFile;
