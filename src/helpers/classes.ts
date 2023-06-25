/**
 * This function is used to join multiple classes together
 * @param names - The classes to be joined
 * @returns The joined classes
 */
export const classes = (...names: (string | undefined)[]) =>
	names.filter(Boolean).join(' ');
