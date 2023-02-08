import styles from './Information.module.css';
import Image from 'next/image';
import { Anton } from '@next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

// A component that can receive a title, description (as a string that can contain spans) and a button (name, link)
export function Information() {
	return (
		<div className={styles.hero}>
			<div className={styles.content}>
				<h1 className={[styles.title, anton.className].join(' ')}>
					ABOUT THE SUMMIT
				</h1>
				<p className={styles.description}>
					We provide up-and-coming
					<span> STEM leaders </span>
					of
					<span> Bosnia and Herzegovina </span>
					the three key ingredients for success:
					<span> quality education</span>,<span> access to technology</span>,
					and
					<span> leadership development</span>.
				</p>
				<p className={styles.description}>
					This year, we will hear the stories of leaders and organisations about
					how they are rethinking our present approach to global challenges, and{' '}
					<span> inspire </span> us to <span> reimagine </span> a more{' '}
					<span> prosperous future </span>
					in which we take a more active role.
				</p>
				<button>
					<a href="/about">{'Learn More'}</a>
				</button>
			</div>
			<div className={styles.backgroundOverlay}>
				<Image src="/hex.svg" alt="decor" width={428} height={653} />
			</div>
		</div>
	);
}
