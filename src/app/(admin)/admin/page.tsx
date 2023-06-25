'use client';

import { useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import FLSLogo from '@public/logos/logo-fls.svg';
import Image from 'next/image';
import useUserStore from '@/src/stores/userStore';
import toast from 'react-hot-toast';

type LoginCredentials = {
	email: string;
	password: string;
};

export default function Page() {
	const { user, login } = useUserStore();
	const router = useRouter();
	const [credentials, setCredentials] = useState<LoginCredentials>({
		email: '',
		password: '',
	});

	if (user) {
		redirect('/admin/payments');
		return <></>;
	}

	return (
		<div className='w-full h-screen flex justify-center items-center'>
			<div className='flex gap-10 flex-col items-center justify-center'>
				<div className='gap-4 select-none flex flex-col'>
					<div className='flex gap-8'>
						<Image
							src={FLSLogo}
							alt={'Futures Leaders Summit Logo'}
							width={200}
						/>
						<div className='h-[100px] w-[1px] bg-white bg-opacity-25' />
						<div className='flex flex-col gap-2'>
							<h1 className='text-4xl font-bold text-white'>
								Admin
							</h1>
							<h1 className='text-4xl font-bold text-white'>
								Dashboard
							</h1>
						</div>
					</div>
					<p className='opacity-75 text-center'>
						Please login to access the admin dashboard
					</p>
				</div>
				<div className='flex w-[500px] flex-col gap-4'>
					<input
						type='email'
						placeholder='Email'
						className='px-4 py-2 text-center bg-secondary-gray text-white border border-white border-opacity-10 rounded-md'
						value={credentials.email}
						onChange={e =>
							setCredentials({
								...credentials,
								email: e.target.value,
							})
						}
					/>
					<input
						type='password'
						placeholder='Password'
						className='px-4 py-2 text-center  bg-secondary-gray text-white border border-white border-opacity-10 rounded-md'
						value={credentials.password}
						onChange={e =>
							setCredentials({
								...credentials,
								password: e.target.value,
							})
						}
					/>
					<button
						className='px-4 py-2 border-[1px] bg-white text-black rounded-md'
						onClick={() => {
							login(credentials.email, credentials.password)
								.then(success => {
									if (success) {
										toast.success(
											'Logged in successfully.'
										);
										router.push('/admin/payments');
									} else {
										toast.error('Invalid credentials');
									}
								})
								.catch(err => toast.error(err));
						}}
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
}
