export const showError = () => {
	console.error('Operation failed');
};

export const showGreeting = (userName) => {
	console.log(`Welcome to the File Manager, ${userName}!`);
};

export const showGoodbye = (userName) => {
	console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
};

export const showWrong = () => {
	console.log('Invalid input');
};

export const showFolder = () => {
	console.log(`You are currently in ${process.cwd()}\n`);
};
