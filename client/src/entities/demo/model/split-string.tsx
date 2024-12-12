export const splitString = (input: string): [string, string] => {
	const [name, value] = input.split(":");
	return [name.trim(), value.trim()];
};
