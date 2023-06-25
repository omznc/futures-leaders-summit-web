'use client';

import { AdminPanelButton } from '@components/Button/Button';
import { FaCopy, FaDownload } from 'react-icons/fa';
import useUserStore from '@/src/stores/userStore';
import { redirect } from 'next/navigation';
import useFetcher from '@helpers/fetcher';
import { useEffect } from 'react';
import { FilterTravelGrantsResponse } from '@interfaces/interfaces';
import { parseDate } from '@helpers/time';
import toast from 'react-hot-toast';
import { Table, TableData, TableHeader } from '@components/Table/Table';

export default function Page() {
	const { user } = useUserStore();

	useEffect(() => {
		if (!user) {
			return redirect('/admin');
		}
	}, [user]);

	let { data, error, isLoading } = useFetcher(
		'https://fls-backend.herokuapp.com/travel-grant/filter-travel-grants'
	);

	if (error) {
		return <div>Error: {error}</div>;
	}

	const response = data as FilterTravelGrantsResponse;

	return (
		<div className='flex h-full flex-col gap-8'>
			<div className='flex flex-col gap-4'>
				<h1 className='text-4xl text-center font-bold text-white'>
					Travel Grants
				</h1>
				{!isLoading ? (
					<p className='text-center opacity-75'>
						We have given out
						<span className='font-bold text-center'>{` ${response?.totalElements} `}</span>
						travel grants
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
						title={'Download as CSV'}
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
							<TableHeader title={'Full Name'} />
							<TableHeader title={'Email'} />
							<TableHeader title={'Phone Number'} />
							<TableHeader title={'University'} />
							<TableHeader title={'Field'} />
							<TableHeader title={'City'} />
							<TableHeader title={'Date'} />
							<TableHeader title={'LinkedIn'} />
						</>
					}
					body={response.content.map(item => (
						<tr key={item.id}>
							<TableData
								data={
									<>
										<FaCopy className='mr-2' />{' '}
										{item?.id?.substring(0, 8)}{' '}
									</>
								}
								onClick={() => {
									navigator.clipboard
										.writeText(JSON.stringify(item))
										.then(() =>
											toast.success(
												'Copied row to clipboard'
											)
										)
										.catch(() =>
											toast.error(
												'Failed to copy to clipboard'
											)
										);
								}}
							/>
							<TableData
								data={`${item?.firstName} ${item?.lastName}`}
							/>
							<TableData data={item?.email} />
							<TableData data={item?.phoneNumber} />
							<TableData data={item?.university} />
							<TableData data={item?.fieldOfStudy} />
							<TableData data={item?.currentCity} />
							<TableData data={parseDate(item?.createdAt)} />
							<TableData data={item?.linkedinUrl} />
						</tr>
					))}
				/>
			)}
		</div>
	);
}
