'use client';

import { AdminPanelButton } from '@components/Button/Button';
import { FaPlus } from 'react-icons/fa';
import useUserStore from '@/src/stores/userStore';
import { redirect } from 'next/navigation';
import useFetcher from '@helpers/fetcher';
import { useEffect } from 'react';
import { FilterDiscountsResponse } from '@interfaces/interfaces';
import toast from 'react-hot-toast';
import {
	Table,
	TableData,
	TableDataID,
	TableHeader,
} from '@components/Table/Table';
import { BsTrash3 } from 'react-icons/bs';

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
				<h1 className='text-4xl text-center font-bold text-white'>
					Discounts
				</h1>
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
			<div className='flex w-full justify-center items-center'>
				<div className='flex max-w-[1000px] min-w-fit whitespace-nowrap gap-8 justify-center items-center'>
					<AdminPanelButton
						disabled={isLoading}
						title={'Dodaj Popust'}
						icon={<FaPlus />}
					/>
				</div>
			</div>
			{isLoading ? (
				<div
					className={`w-full flex flex-col justify-center items-center h-full bg-white bg-opacity-10 rounded-lg ${
						isLoading ? 'animate-pulse bg-opacity-25' : ''
					}`}
				/>
			) : (
				<Table
					head={
						<>
							<TableHeader title={'ID'} />
							<TableHeader title={'Name'} />
							<TableHeader title={'Ticket type'} />
							<TableHeader title={'Value (%)'} />
							<TableHeader title={'Available'} />
							<TableHeader title={'Used'} />
							<TableHeader title={'Delete'} />
						</>
					}
					body={response.content.map(item => (
						<tr key={item.id}>
							<TableDataID data={item} />
							<TableData data={item.discountName} />
							<TableData data={item.relevantTicketType} />
							<TableData data={item.value} />
							<TableData data={item.availableUnits} />
							<TableData data={item.unitsUsed} />
							<TableData
								data={
									<>
										<BsTrash3 /> Delete
									</>
								}
								onClick={() => {
									DeleteDiscount(item.id, user?.token!)
										.then(() => {
											toast.success(
												'Discount deleted (not really)'
											);
										})
										.catch(() => {
											toast.error(
												'Failed to delete discount'
											);
										});
								}}
							/>
						</tr>
					))}
				/>
			)}
		</div>
	);
}

const DeleteDiscount = async (id: string, token: string) => {
	alert('Pretended to delete discount with id: ' + id);
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
