import { createReadStream } from 'node:fs';

const readFile = ([target]) =>
	new Promise((resolve, reject) => {
		const readStream = createReadStream(target);

		let data = '';

		readStream
			.on('error', reject)
			.on('data', (chunk) => {
				data += chunk;
			})
			.on('end', () => {
				resolve(data);
			});
	}).then(console.log);

export default readFile;
