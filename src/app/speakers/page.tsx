import { Inter } from 'next/font/google';
import styles from './page.module.css';
import { OverlayBottom } from '@components/OverlayBottom/OverlayBottom';
import { Metadata } from 'next';
import { title } from '@helpers/seo';

export const metadata: Metadata = {
	title: `Speakers | ${title}`,
	description: `The list of speakers for ${title}`,
};

const inter = Inter({ subsets: ['latin'] });

export default function Page() {
	return (
		<>
			<main className={[inter.className, styles.main].join(' ')}>
				<div className={styles.hero}></div>
				<OverlayBottom />
			</main>
		</>
	);
}
