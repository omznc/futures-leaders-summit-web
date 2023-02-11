import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import { CallToAction } from '@/components/CallToAction/CallToAction';
import { Information } from '@/components/Information/Information';
import { Keynotes } from '@/components/Keynotes/Keynotes';
import HeroBackground from '@/public/hero.webp';
import HeroLogo from '@/public/hero-new.svg';
import BackgroundDecoration from '@/public/decor.svg';

const inter = Inter({ subsets: ['latin'] });

const content = [
	`We provide up-and-coming *STEM* *leaders* of *Bosnia* *and* *Herzegovina* the three key ingredients for success: *quality* *education*, *access* to *technology*, and *leadership* *development*.`,
	`This year, we will hear the stories of *leaders* and *organisations* about how they are rethinking our present approach to global challenges, and *inspire* us to *reimagine* a more *prosperous* *future* in which we take a more active role.`,
];

export default function Home() {
	return (
		<main className={`${styles.main} ${inter.className}`}>
			<Cover />
			<Information
				title={'ABOUT THE SUMMIT'}
				content={content}
				buttonLink={'/about'}
				buttonTitle={'Learn More'}
			/>
			<CallToAction />
			<Keynotes />
			<OverlayBottom />
		</main>
	);
}

function Cover() {
	return (
		<div className={styles.hero}>
			<Image
				className={styles.background}
				src={HeroBackground}
				alt="Futures Leaders Summit"
				priority={true}
			/>
			<Image
				className={styles.image}
				src={HeroLogo}
				alt="Futures Leaders Summit"
				priority={true}
			/>
		</div>
	);
}

function OverlayBottom() {
	return (
		<div className={styles.hero_dynamic}>
			<div className={styles.backgroundOverlayDecoration}>
				<Image src={BackgroundDecoration} alt="Background decoration" />
			</div>
		</div>
	);
}
