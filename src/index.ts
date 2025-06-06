const BASE_TEXT = "One two three. Four five.";
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
