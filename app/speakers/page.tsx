import { Inter } from '@next/font/google';
import styles from './page.module.css';
import { Information } from '@/components/Information/Information';

const inter = Inter({ subsets: ['latin'] });
export default function Home() {
	return (
		<main className={`${styles.main} ${inter.className}`}>
			<Information />
		</main>
	);
}
