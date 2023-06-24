'use client';

import '../globals.css';
import { Inter } from 'next/font/google';
import { ReactNode, useEffect, useState } from 'react';
import Sidebar from '@components/Sidebar/Sidebar';
import useUserStore from '@/src/stores/userStore';

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
				<body className='flex w-screen h-screen bg-secondary-gray'>
					{showSidebar && <Sidebar />}
					<div className='flex flex-col items-center h-full justify-start w-full p-8'>
						<div className='flex flex-col h-full max-w-[1000px] w-full p-8'>
							{children}
						</div>
					</div>
				</body>
			</html>
		</>
	);
}
