'use client';

import { AdminPanelButton } from '@components/Button/Button';
import { FaDownload } from 'react-icons/fa';
import useUserStore from '@stores/userStore';
import { redirect } from 'next/navigation';
import useFetcher from '@helpers/fetcher';
import { useEffect } from 'react';
import { IFilterPaymentsResponse } from '@interfaces/interfaces';
import { parseDate } from '@helpers/time';
import {
	Table,
	TableData,
	TableDataID,
	TableHeader,
} from '@components/Table/Table';

export default function Page() {
	const { user } = useUserStore();
	useEffect(() => {
		if (!user) {
			return redirect('/admin');
		}
	}, [user]);

	const { data, error, isLoading } = useFetcher(
		'https://fls-backend.herokuapp.com/payment/filter-payments'
	);

	if (error) {
		return <div>Error: {error}</div>;
	}

	const response = data as IFilterPaymentsResponse;

	return (
		<div className='flex h-full flex-col gap-8'>
			<div className='flex flex-col gap-4'>
				<h1 className='text-4xl text-center font-bold text-white'>
					Payments
				</h1>
				{!isLoading ? (
					<p className='text-center opacity-75'>
						We have handled
						{/*// @ts-ignore*/}
						<span className='font-bold text-center'>{` ${data?.totalElements!} `}</span>
						payments
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
						title={'Download Payments'}
						disabled={isLoading}
						icon={<FaDownload />}
					/>
					<AdminPanelButton
						title={'Download Customers'}
						disabled={isLoading}
						icon={<FaDownload />}
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
							<TableHeader title={'Payer'} />
							<TableHeader title={'Description'} />
							<TableHeader title={'Total'} />
							<TableHeader title={'Method'} />
							<TableHeader title={'Status'} />
							<TableHeader title={'Date'} />
							<TableHeader title={'Bought for'} />
						</>
					}
					body={response.content.map(item => (
						<tr key={item.id}>
							<TableDataID data={item} />

							<TableData data={item?.payerFullName} />
							<TableData data={item?.paymentDescription} />
							<TableData data={item?.paymentAmount} />
							<TableData data={item?.paymentMethod} />
							<TableData data={item?.paymentStatus} />
							<TableData data={parseDate(item?.createdAt)} />
							<TableData
								data={item?.customers
									.map(
										customer =>
											`${customer.name} ${customer.surname}`
									)
									.join('\n')}
							/>
						</tr>
					))}
				/>
			)}
		</div>
	);
}
