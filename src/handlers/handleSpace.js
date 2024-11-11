const handleSpace = (data) => {
	if (data.length === 0) {
		return data;
	}

	return data.map((str) =>
		/\*/.test(str) ? str.replaceAll(/\*+/g, ' ') : str
	);
};

export default handleSpace;
