'use client';

import { AdminPanelButton } from '@components/Button/Button';
import { FaDownload } from 'react-icons/fa';
import useUserStore from '@/src/stores/userStore';

import { redirect } from 'next/navigation';
import useFetcher from '@helpers/fetcher';
import { useEffect } from 'react';

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

	return (
		<div className='flex h-full flex-col gap-8'>
			<div className='flex flex-col gap-4'>
				<h1 className='text-4xl text-center font-bold text-white'>
					Registrations
				</h1>
				{!isLoading ? (
					<p className='text-center opacity-75'>
						We have
						{/*// @ts-ignore*/}
						<span className='font-bold text-center'>{` ${data?.totalElements!} `}</span>
						registrations
					</p>
				) : (
					<div className='mt-2 flex justify-center animate-pulse'>
						<div className='h-2.5 bg-gray-200 rounded-full w-72 dark:bg-gray-700 mb-4'></div>
					</div>
				)}
			</div>
			<div className='flex gap-4 justify-center items-center'>
				<AdminPanelButton
					title={'Download as CSV'}
					icon={<FaDownload />}
					disabled={isLoading}
				/>
			</div>
			<div
				className={`w-full flex flex-col justify-center items-center h-full bg-white bg-opacity-10 rounded-lg ${
					isLoading ? 'animate-pulse bg-opacity-25' : ''
				}`}
			>
				<h2>Pretend this is a table</h2>
			</div>
		</div>
	);
}
