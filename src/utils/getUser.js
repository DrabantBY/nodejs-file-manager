export const getUser = () => {
	let [key, user] = process.argv.at(-1).split(/\=+/);
	console.log(process.argv);

	if (key !== '--username') {
		return null;
	}

	return user || 'Stranger';
};
