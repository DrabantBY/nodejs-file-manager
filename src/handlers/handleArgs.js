const handleArgs = (line) => {
	if (line.length === 0) {
		return line;
	}

	const args = line.trim().split(/\s+/);

	if (args.length === 1) {
		return args;
	}

	return args.map((arg) =>
		/\*/.test(arg) ? arg.replaceAll(/\*+/g, ' ') : arg
	);
};

export default handleArgs;
