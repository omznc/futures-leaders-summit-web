import './globals.css';
import Header from '../components/Header/Header';
import { Inter } from '@next/font/google';
import { Footer } from '@/components/Footer/Footer';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });
const year = new Date().getFullYear().toString().slice(-2);

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<html lang="en" className={inter.className}>
				<head>
					<title>{`Futures Leaders Summit '${year}`}</title>
				</head>
				<body>
					<Header />
					{children}
					<Footer />
				</body>
			</html>
		</>
	);
}
