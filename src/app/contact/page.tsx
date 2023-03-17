import styles from './page.module.css';
import { OverlayBottom } from '@components/OverlayBottom/OverlayBottom';
import { Metadata } from 'next';
import { title } from '@helpers/seo';

export const metadata: Metadata = {
	title: `Contact | ${title}`,
	description: `Contacts of the Futures Leaders Summit`,
};

export default function Page() {
	return (
		<>
			<main className={styles.main}>
				<div className={styles.hero}></div>
				<OverlayBottom />
			</main>
		</>
	);
}
