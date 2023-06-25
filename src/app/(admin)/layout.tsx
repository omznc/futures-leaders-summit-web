'use client';

import '../globals.css';
import { Inter } from 'next/font/google';
import { ReactNode, useEffect, useState } from 'react';
import Sidebar from '@components/Sidebar/Sidebar';
import useUserStore from '@/src/stores/userStore';
import Toast from '@components/Toast/Toast';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
	const { user } = useUserStore();
	const [showSidebar, setShowSidebar] = useState(false);
	useEffect(() => {
		if (!user) {
			setShowSidebar(false);
		} else {
			setShowSidebar(true);
		}
	}, [user]);

	return (
		<>
			<html lang='en' className={inter.className}>
				<body className='flex transition-all  w-screen h-screen bg-secondary-gray'>
					{showSidebar && <Sidebar />}
					<Toast
						toastOptions={{
							position: 'bottom-center',
							style: {
								backgroundColor: '#0c1820',
								color: '#fff',
							},
						}}
					/>
					<div className='flex transition-all flex-col overflow-auto items-center h-full w-full justify-start p-8'>
						<div className='flex transition-all  flex-col h-full w-full min-w-[200px] p-8'>
							{children}
						</div>
					</div>
				</body>
			</html>
		</>
	);
}
