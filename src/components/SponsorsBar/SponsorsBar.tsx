import styles from './style.module.css';
import LogoBHFF from '@public/logos/logo-bhff.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@components/Container/Container';
import { ISponsors } from '@interfaces/interfaces';

const year = new Date().getFullYear();

const sponsors: ISponsors[] = [
	{
		category: 'Platinum',
		members: [
			{
				name: 'BHFF',
				image: LogoBHFF,
				link: 'https://www.bhfuturesfoundation.org/',
			},
			{
				name: 'BHFF',
				image: LogoBHFF,
				link: 'https://www.bhfuturesfoundation.org/',
			},
			{
				name: 'BHFF',
				image: LogoBHFF,
				link: 'https://www.bhfuturesfoundation.org/',
			},
		],
	},
];

export default function SponsorsBar() {
	// const sponsors = fetch(...)

	return (
		<Container title={`${year} SPONSORS & PARTNERS`}>
			<div className={styles.sponsorsBar}>
				{sponsors
					.flat()
					.map(sponsor => sponsor.members)
					.flat()
					.map(member => (
						<Link
							href={member.link}
							key={member.name}
							target={'_blank'}
						>
							<Image
								src={member.image}
								key={member.name}
								alt={member.name}
								className={styles.sponsor}
							/>
						</Link>
					))}
			</div>
		</Container>
	);
}
