const handleSpace = (path) =>
	/\*/.test(path) ? path.replaceAll(/\*+/g, ' ') : path;

export default handleSpace;
