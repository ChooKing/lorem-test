const BASE_TEXT =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const WORDS = BASE_TEXT.split(" ");
export const lorem = (length: number) => {
	if (length <= WORDS.length) {
		return WORDS.slice(0, length).join(" ");
	}
	const repetitions = Math.floor(length / WORDS.length);
	const remainder = length % WORDS.length;
	return (
		`${BASE_TEXT} `.repeat(repetitions) + WORDS.slice(0, remainder).join(" ")
	).trim();
};
