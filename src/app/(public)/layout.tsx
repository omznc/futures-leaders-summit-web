import '@app/globals.css';
import Header from '@components/Header/Header';
import { Inter } from 'next/font/google';
import { Footer } from '@components/Footer/Footer';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { description, title } from '@helpers/seo';
import styles from './page.module.css';
import { OverlayBottom } from '@components/OverlayBottom/OverlayBottom';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: title,
	description: description,
	openGraph: {
		title: title,
		description: description,
		url: 'https://fls.ba/',
		siteName: title,
		images: [
			{
				url: 'https://fls.ba/share.png',
				width: 800,
				height: 600,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<html lang='en' className={inter.className}>
				<body>
					<Header />
					<main className={styles.main}>
						{children}
						<OverlayBottom />
					</main>
					<Footer />
				</body>
			</html>
		</>
	);
}
