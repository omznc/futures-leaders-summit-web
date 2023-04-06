import styles from './style.module.css';
import LogoBHFF from '@public/logos/logo-bhff.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@components/Container/Container';

const year = new Date().getFullYear();

const sponsors = [{ src: LogoBHFF, alt: 'BHFF', href: 'https://www.fls.ba' }];

export default function SponsorsBar() {
	// const sponsors = fetch(...)

	return (
		<Container title={`${year} SPONSORS & PARTNERS`}>
			<div className={styles.sponsorsBar}>
				{sponsors.map(sponsor => (
					<Link href={sponsor.href} key={sponsor.alt} target={'_blank'}>
						<Image
							src={sponsor.src}
							key={sponsor.alt}
							alt={sponsor.alt}
							className={styles.sponsor}
						/>
					</Link>
				))}
			</div>
		</Container>
	);
}
