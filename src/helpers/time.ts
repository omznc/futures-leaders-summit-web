export const parseDate = (date: string) => {
	const parsedDate = new Date(date);
	const day = parsedDate.getDate();
	const month = parsedDate.toLocaleString('default', { month: 'short' });
	const year = parsedDate.getFullYear();
	return `${day} ${month} ${year}`;
};
