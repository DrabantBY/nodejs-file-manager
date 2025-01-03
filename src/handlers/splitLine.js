const splitLine = (line) => {
	if (line.length === 0) {
		return [];
	}

	const args = line.trim().split(/\s+/);

	if (args.length === 1) {
		return args;
	}

	return args.map((arg) =>
		/\*/.test(arg) ? arg.replaceAll(/\*+/g, ' ') : arg
	);
};

export default splitLine;
