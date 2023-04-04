import styles from './page.module.css';
import { OverlayBottom } from '@components/OverlayBottom/OverlayBottom';
import { Metadata } from 'next';
import { title } from '@helpers/seo';

export const metadata: Metadata = {
	title: `About | ${title}`,
	description: `About the Futures Leaders Summit`,
};

export default function Page() {
	return (
		<>
			<div className={styles.hero}></div>
			<OverlayBottom />
		</>
	);
}
