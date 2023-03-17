// Return a string of classes, separated by a space.
export const classes = (...names: (string | undefined)[]) =>
	names.filter(Boolean).join(' ');
