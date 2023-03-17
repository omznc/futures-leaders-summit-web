'use client';

import styles from './SponsorsBar.module.css';
import { Anton } from 'next/font/google';
import LogoBHFF from '@public/logos/logo-bhff.svg';
import Image from 'next/image';

const year = new Date().getFullYear();
const anton = Anton({ weight: '400', subsets: ['latin'] });

export default function SponsorsBar() {
	return (
		<div className={styles.heroDynamic}>
			<div className={styles.container}>
				<h1 className={anton.className}>{`${year} SPONSORS & PARTNERS`}</h1>
				<div className={styles.sponsorsBar}>
					<Image
						src={LogoBHFF}
						alt='Bosnia and Herzegovina Future Foundation'
						className={styles.sponsor}
					/>
					<Image
						src={LogoBHFF}
						alt='Bosnia and Herzegovina Future Foundation'
						className={styles.sponsor}
					/>
					<Image
						src={LogoBHFF}
						alt='Bosnia and Herzegovina Future Foundation'
						className={styles.sponsor}
					/>
					<Image
						src={LogoBHFF}
						alt='Bosnia and Herzegovina Future Foundation'
						className={styles.sponsor}
					/>
					<Image
						src={LogoBHFF}
						alt='Bosnia and Herzegovina Future Foundation'
						className={styles.sponsor}
					/>
					<Image
						src={LogoBHFF}
						alt='Bosnia and Herzegovina Future Foundation'
						className={styles.sponsor}
					/>
				</div>
			</div>
		</div>
	);
}
