'use client';

import { AdminPanelButton } from '@components/Button/Button';
import { FaPlus } from 'react-icons/fa';
import useUserStore from '@/src/stores/userStore';
import { redirect } from 'next/navigation';
import useFetcher from '@helpers/fetcher';
import { ReactNode, useEffect } from 'react';
import { Discount, FilterDiscountsResponse } from '@interfaces/interfaces';

export default function Page() {
	const { user } = useUserStore();

	useEffect(() => {
		if (!user) {
			return redirect('/admin');
		}
	}, [user]);

	const { data, error, isLoading } = useFetcher(
		'https://fls-backend.herokuapp.com/discount/filter-discounts'
	);

	if (error) {
		return <div>Error: {error}</div>;
	}

	const response = data as FilterDiscountsResponse;

	return (
		<div className='flex h-full flex-col gap-8'>
			<div className='flex flex-col gap-4'>
				<h1 className='text-4xl text-center font-bold text-white'>Discounts</h1>
				{!isLoading ? (
					<p className='text-center opacity-75'>
						We have
						{/*// @ts-ignore*/}
						<span className='font-bold text-center'>{` ${data?.totalElements!} `}</span>
						active discounts
					</p>
				) : (
					<div className='mt-2 flex justify-center animate-pulse'>
						<div className='h-2.5 bg-gray-200 rounded-full w-72 dark:bg-gray-700 mb-4'></div>
					</div>
				)}
			</div>
			<div className='flex gap-4 justify-center items-center'>
				<AdminPanelButton
					disabled={isLoading}
					title={'Dodaj Popust'}
					icon={<FaPlus />}
				/>
			</div>
			{isLoading ? (
				<div
					className={`w-full flex flex-col justify-center items-center h-full bg-white bg-opacity-10 rounded-lg ${
						isLoading ? 'animate-pulse bg-opacity-25' : ''
					}`}
				/>
			) : (
				<Table data={response} />
			)}
		</div>
	);
}

function Table({ data }: { data: FilterDiscountsResponse }) {
	return (
		<div className='overflow-x-auto rounded-lg border border-gray-200'>
			<table className='w-full min-w-min divide-y-2 divide-gray-200 bg-white bg-opacity-100 text-sm'>
				<thead className='ltr:text-left rtl:text-right'>
					<tr>
						<TableHeader title={'ID'} />
						<TableHeader title={'Name'} />
						<TableHeader title={'Ticket type'} />
						<TableHeader title={'Value (%)'} />
						<TableHeader title={'Available'} />
						<TableHeader title={'Used'} />
						<TableHeader title={'Delete'} />
					</tr>
				</thead>

				<tbody className='divide-y divide-gray-200'>
					{data?.content.map(payment => (
						<TableRow key={payment.id} data={payment} />
					))}
				</tbody>
			</table>
		</div>
	);
}

function TableHeader({ title }: { title: string }) {
	return (
		<th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
			{title}
		</th>
	);
}

function TableData({
	data,
	onClick,
}: {
	data: ReactNode;
	onClick?: () => void;
}) {
	return (
		<td
			onClick={onClick}
			className={`whitespace-nowrap px-4 py-2 text-gray-700 ${
				onClick && 'cursor-pointer hover:bg-neutral-100 transition-all'
			}`}
		>
			{data}
		</td>
	);
}

function TableRow({ data }: { data: Discount }) {
	const { user } = useUserStore();

	return (
		<tr>
			<TableData
				data={data?.id?.substring(0, 8)}
				onClick={() => {
					navigator.clipboard.writeText(JSON.stringify(data)).catch(() => {
						console.log('Failed to copy');
					});
				}}
			/>
			<TableData data={data.discountName} />
			<TableData data={data.relevantTicketType} />
			<TableData data={data.value} />
			<TableData data={data.availableUnits} />
			<TableData data={data.unitsUsed} />
			<TableData
				data={'Delete'}
				onClick={() => {
					DeleteDiscount(data.id, user?.token!)
						.then(res => {
							if (res === 'error') {
								alert('Error deleting discount');
								return;
							}
							alert('Discount deleted (not really)');
						})
						.catch(() => {
							alert('Error deleting discount');
						});
				}}
			/>
		</tr>
	);
}

const DeleteDiscount = async (id: string, token: string) => {
	alert('Pretended to delete discount with id: ' + id);
	return;
	// let res = await fetch(
	// 	`https://fls-backend.herokuapp.com/discount/delete-discount/${id}`,
	// 	{
	// 		method: 'DELETE',
	// 		headers: {
	// 			Accept: 'application/json',
	// 			Authorization: token,
	// 			'Content-Type': 'application/json',
	// 		},
	// 	}
	// ).then(res => {
	// 	if (res.status !== 200) return 'error';
	// 	return res.json();
	// });
	//
	// return res;
};
