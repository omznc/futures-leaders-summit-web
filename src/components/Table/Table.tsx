import { ReactNode } from 'react';
import { FaCopy } from 'react-icons/fa';
import toast from 'react-hot-toast';

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
	const clickable = onClick && data;
	return (
		<td
			onClick={onClick}
			className={`whitespace-nowrap  border-[1px] border-black border-opacity-10 flex-wrap px-4 py-2 text-gray-700 ${
				clickable &&
				'cursor-pointer text-center hover:bg-neutral-200 bg-neutral-100 transition-all'
			}`}
		>
			<div
				className={`flex gap-2 items-center ${
					clickable && 'justify-center'
				}`}
			>
				{data}
			</div>
		</td>
	);
}

export function TableDataID({ data }: { data: { id: string } }) {
	return (
		<TableData
			data={
				<>
					<FaCopy className='mr-2' /> {data.id?.substring(0, 8)}{' '}
				</>
			}
			onClick={() => {
				navigator.clipboard
					.writeText(JSON.stringify(data))
					.then(() => toast.success('Copied row to clipboard'))
					.catch(() => toast.error('Failed to copy to clipboard'));
			}}
		/>
	);
}
