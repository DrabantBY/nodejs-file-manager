export const showError = () => {
	console.error('\x1b[31mOperation failed\x1b[0m');
};

export const showGreeting = (userName) => {
	console.log(`\x1b[34mWelcome to the File Manager, ${userName}!\x1b[0m`);
};

export const showGoodbye = (userName) => {
	console.log(
		`\x1b[34mThank you for using File Manager, ${userName}, goodbye!\x1b[0m`
	);
};

export const showWrong = () => {
	console.log(`\x1b[33mInvalid input\x1b[0m`);
};

export const showFolder = () => {
	console.log(`\x1b[32mYou are currently in ${process.cwd()}\x1b[0m`);
};
