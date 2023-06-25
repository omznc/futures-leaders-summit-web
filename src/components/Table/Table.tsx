import { ReactNode } from 'react';

export function Table({ head, body }: { head: ReactNode; body: ReactNode }) {
	return (
		<div className='overflow-x-auto rounded-lg border border-gray-200'>
			<table className='w-full min-w-min divide-y-2 divide-gray-200 bg-white bg-opacity-100 text-sm'>
				<thead className='ltr:text-left rtl:text-right'>
					<tr>{head}</tr>
				</thead>

				<tbody className='divide-y divide-gray-200'>{body}</tbody>
			</table>
		</div>
	);
}

export function TableHeader({ title }: { title: string }) {
	return (
		<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
			{title}
		</th>
	);
}

export function TableData({
	data,
	onClick,
}: {
	data: ReactNode;
	onClick?: () => void;
}) {
	return (
		<td
			onClick={onClick}
			className={`whitespace-nowrap flex-wrap px-4 py-2 text-gray-700 ${
				onClick &&
				data &&
				'cursor-pointer hover:bg-neutral-200 bg-neutral-100 transition-all'
			}`}
		>
			<div className='flex gap-2 items-center'>{data}</div>
		</td>
	);
}
