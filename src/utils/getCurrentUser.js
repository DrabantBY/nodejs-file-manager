export const getUser = () => {
	let [key, user] = process.argv.at(-1).split(/\=+/);

	if (key !== '--username') {
		return null;
	}

	return user || 'Stranger';
};

export default getUser;
