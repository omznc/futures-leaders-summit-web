import styles from './CallToAction.module.css';
import { Anton } from '@next/font/google';
import Link from 'next/link';

const anton = Anton({ weight: '400', subsets: ['latin'] });

export function CallToAction() {
	return (
		<div className={styles.cta_bar}>
			<h1 className={`${styles.title} ${anton.className}`}>
				{"DISCOVER THIS YEAR'S PROGRAM".split(' ').map(item => {
					return <span key={item}>{item}</span>;
				})}
			</h1>
			<button>
				<Link href="/schedule">{'See Schedule'}</Link>
			</button>
		</div>
	);
}
