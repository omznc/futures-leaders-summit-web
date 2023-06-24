'use client';

import { AdminPanelButton } from '@components/Button/Button';
import { FaCopy, FaDownload } from 'react-icons/fa';
import useUserStore from '@/src/stores/userStore';
import { redirect } from 'next/navigation';
import useFetcher from '@helpers/fetcher';
import { ReactNode, useEffect } from 'react';
import {
	FilterTravelGrantsResponse,
	TravelGrant,
} from '@interfaces/interfaces';
import { parseDate } from '@helpers/time';
import toast from 'react-hot-toast';

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
			<div className='flex gap-4 justify-center items-center'>
				<AdminPanelButton
					disabled={isLoading}
					title={'Download as CSV'}
					icon={<FaDownload />}
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

function Table({ data }: { data: FilterTravelGrantsResponse }) {
	return (
		<div className='overflow-x-auto rounded-lg border border-gray-200'>
			<table className='w-full min-w-min divide-y-2 divide-gray-200 bg-white bg-opacity-100 text-sm'>
				<thead className='ltr:text-left rtl:text-right'>
					<tr>
						<TableHeader title={'ID'} />
						<TableHeader title={'Full Name'} />
						<TableHeader title={'Email'} />
						<TableHeader title={'Phone Number'} />
						<TableHeader title={'University'} />
						<TableHeader title={'Field'} />
						<TableHeader title={'City'} />
						<TableHeader title={'Date'} />
						<TableHeader title={'LinkedIn'} />
					</tr>
				</thead>

				<tbody className='divide-y divide-gray-200'>
					{data?.content.map(travelGrant => (
						<TableRow key={travelGrant.id} data={travelGrant} />
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
			className={`whitespace-nowrap flex-wrap px-4 py-2 text-gray-700 ${
				onClick && 'cursor-pointer hover:bg-neutral-100 transition-all'
			}`}
		>
			<div className='flex gap-2 items-center'>{data}</div>
		</td>
	);
}

function TableRow({ data }: { data: TravelGrant }) {
	return (
		<tr>
			<TableData
				data={
					<>
						<FaCopy className='mr-2' /> {data?.id?.substring(0, 8)}{' '}
					</>
				}
				onClick={() => {
					navigator.clipboard
						.writeText(JSON.stringify(data))
						.then(() => toast.success('Copied to clipboard'))
						.catch(() =>
							toast.error('Failed to copy to clipboard')
						);
				}}
			/>
			<TableData data={`${data?.firstName} ${data?.lastName}`} />
			<TableData data={data?.email} />
			<TableData data={data?.phoneNumber} />
			<TableData data={data?.university} />
			<TableData data={data?.fieldOfStudy} />
			<TableData data={data?.currentCity} />
			<TableData data={parseDate(data?.createdAt)} />
			<TableData data={data?.linkedinUrl} />
		</tr>
	);
}
