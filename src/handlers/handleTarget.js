import { parse, join } from 'node:path';

const handleTarget = ([source, folder]) => {
	const { base: file } = parse(source);

	const target = join(folder, file);

	return [source, target];
};

export default handleTarget;
