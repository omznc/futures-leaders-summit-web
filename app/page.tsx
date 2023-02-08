import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import { CallToAction } from '@/components/CallToAction/CallToAction';
import { Information } from '@/components/Information/Information';
import { Keynotes } from '@/components/Keynotes/Keynotes';

const inter = Inter({ subsets: ['latin'] });

const keynotes = [
	{
		name: 'Sana Alajmovic',
		company: 'Co-Founder & CEO at Sigrid Therapeutics',
		image: '/speakers/sana-alajmovic.webp',
	},
	{
		name: 'Ivica Puljak',
		company: 'Mayor of City of Split',
		image: '/speakers/ivica-puljak.webp',
	},
	{
		name: 'Nina Avramovic Trninic',
		company:
			'Head of Department for Railway Technology at the Austrian Federal Ministry for Climate Action, Environment, Energy, Mobility, Innovation and Technology',
		image: '/speakers/nina-avramovic-trnicic.webp',
	},
	{
		name: 'Azra Osmancevic',
		company:
			'Head of Business Development at Viaplay Group, Co-founder at Justic',
		image: '/speakers/azra-osmancevic.webp',
	},
];

export default function Home() {
	return (
		<main className={`${styles.main} ${inter.className}`}>
			<Cover />
			<Information />
			<CallToAction />
			<Keynotes keynotes={keynotes} />
			<OverlayBottom />
		</main>
	);
}

function Cover() {
	return (
		<div className={styles.hero}>
			<Image
				className={styles.background}
				src="/hero.webp"
				alt="Futures Leaders Summit"
				width={1920}
				height={871}
			/>
			<Image
				className={styles.image}
				src="/hero-new.svg"
				alt="Futures Leaders Summit"
				width={900}
				height={500}
			/>
		</div>
	);
}

function OverlayBottom() {
	return (
		<div className={styles.hero_dynamic}>
			<div className={styles.backgroundOverlayDecoration}>
				<Image src="/decor.svg" alt="decor" width={1920} height={431} />
			</div>
		</div>
	);
}
