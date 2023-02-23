import { Inter } from '@next/font/google';
import styles from './page.module.css';
import { OverlayBottom } from '@components/OverlayBottom/OverlayBottom';

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
