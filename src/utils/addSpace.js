const addSpace = (path) =>
	/\*/.test(path) ? path.replaceAll(/\*+/g, ' ') : path;

export default addSpace;
