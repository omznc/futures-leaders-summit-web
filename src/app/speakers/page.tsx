import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Page() {
	return (
		<>
			<main className={[inter.className, styles.main].join(' ')}>
				<div className={styles.hero}></div>
			</main>
		</>
	);
}
