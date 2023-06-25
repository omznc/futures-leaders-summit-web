'use client';

import { AdminPanelButton } from '@components/Button/Button';
import { FaCopy, FaDownload } from 'react-icons/fa';
import useUserStore from '@/src/stores/userStore';

import { redirect } from 'next/navigation';
import useFetcher from '@helpers/fetcher';
import { useEffect } from 'react';
import {
	FilterRegistrationsResponse,
	PersonalDocument,
} from '@interfaces/interfaces';
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

	const { data, error, isLoading } = useFetcher(
		'https://fls-backend.herokuapp.com/registration/filter-registrations'
	);

	if (error) {
		return <div>Error: {error}</div>;
	}

	const response = data as FilterRegistrationsResponse;

	return (
		<div className='flex h-full flex-col gap-8'>
			<div className='flex flex-col gap-4'>
				<h1 className='text-4xl text-center font-bold text-white'>
					Registrations
				</h1>
				{!isLoading ? (
					<p className='text-center opacity-75'>
						We have
						<span className='font-bold text-center'>{` ${response?.totalElements} `}</span>
						registrations
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
						title={'Download as CSV'}
						icon={<FaDownload />}
						disabled={isLoading}
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
							<TableHeader title={'Birth Date'} />
							<TableHeader title={'Email'} />
							<TableHeader title={'Phone Number'} />
							<TableHeader title={'Field'} />
							<TableHeader title={'Tier'} />
							<TableHeader title={'Code'} />
							<TableHeader title={'Date'} />
							<TableHeader title={'LinkedIn'} />
							<TableHeader title={'Resume'} />
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
							<TableData data={parseDate(item?.birthDate)} />
							<TableData data={item?.email} />
							<TableData data={item?.phoneNumber} />
							<TableData data={item?.fieldOfStudy} />
							<TableData data={item?.ticketType} />
							<TableData data={item?.paymentConfirmationCode} />
							<TableData data={parseDate(item?.createdAt)} />
							<TableData data={item?.linkedinUrl} />
							<TableData
								data={item?.personalDocument ? 'Download' : ''}
								onClick={() => {
									item?.personalDocument &&
										DownloadCV(
											item.personalDocument,
											user?.token as string
										).catch(() =>
											toast.error('Failed to download CV')
										);
								}}
							/>
						</tr>
					))}
				/>
			)}
		</div>
	);
}

const DownloadCV = async (doc: PersonalDocument, token: string) => {
	let res = await fetch(
		`https://fls-backend.herokuapp.com/document/download-document/${doc?.id}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
				Accept: 'application/json',
			},
		}
	).then(res => res.blob());

	const url = window.URL.createObjectURL(res);
	const link = document.createElement('a');
	link.href = url;
	link.setAttribute('download', doc?.name);
	document.body.appendChild(link);
	link.click();
	link.remove();
};
