import { showError, showFolder } from '../utils/message.js';

const handleReadError = () => {
	showError();
	showFolder();
};

export default handleReadError;
