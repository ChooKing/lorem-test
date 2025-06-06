import { expect, test } from 'vitest'
import { lorem } from '../src'

test("lorem2", () => {
	expect(lorem(2)).toBe("One two");
});
test("lorem4", () => {
	expect(lorem(4)).toBe("One two three. Four");
});
test("lorem5", () => {
	expect(lorem(5)).toBe("One two three. Four five.");
});
test("lorem7", () => {
	expect(lorem(7)).toBe("One two three. Four five. One two");
});
test("lorem10", () => {
	expect(lorem(10)).toBe("One two three. Four five. One two three. Four five.");
});
test("lorem14", () => {
	expect(lorem(14)).toBe(
		"One two three. Four five. One two three. Four five. One two three. Four",
	);
});
