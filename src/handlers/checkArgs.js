import POINTER_LIST from '../constants/pointerList.js';

export const checkArgs = (args) => {
	const [key, ...values] = args;
	return args.length && POINTER_LIST[values.length].includes(key);
};

export default checkArgs;
