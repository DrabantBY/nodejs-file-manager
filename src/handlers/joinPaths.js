import { parse, join } from 'node:path';

const joinPaths = (source, folder) => {
	const { base } = parse(source);
	return join(folder, base);
};

export default joinPaths;
