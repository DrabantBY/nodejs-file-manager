import POINTER_LIST from '../constants/pointerList.js';

export const validateArgs = (args) => {
	const [key, ...value] = args;

	return args.length && POINTER_LIST[value.length].includes(key);
};

export default validateArgs;
