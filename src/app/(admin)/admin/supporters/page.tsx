'use client';

import { AdminPanelButton } from '@components/Button/Button';
import { FaPlus } from 'react-icons/fa';
import useUserStore from '@/src/stores/userStore';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
	const { user } = useUserStore();

	useEffect(() => {
		if (!user) {
			return redirect('/admin');
		}
	}, [user]);

	return (
		<div className='flex h-full flex-col gap-8'>
			<div className='flex flex-col gap-4'>
				<h1 className='text-4xl text-center font-bold text-white'>
					Supporters
				</h1>
				<div className='mt-2 flex justify-center animate-pulse'>
					<div className='h-2.5 bg-gray-200 rounded-full w-72 dark:bg-gray-700 mb-4'></div>
				</div>
			</div>
			<div className='flex w-full justify-center items-center'>
				<div className='flex max-w-[1000px] min-w-fit whitespace-nowrap gap-8 justify-center items-center'>
					<AdminPanelButton
						disabled={true}
						title={'To Be Implemented'}
						icon={<FaPlus />}
					/>
				</div>
			</div>
			<div
				className={`w-full flex flex-col justify-center items-center h-full bg-white bg-opacity-10 rounded-lg ${'animate-pulse bg-opacity-25'}`}
			/>
		</div>
	);
}
