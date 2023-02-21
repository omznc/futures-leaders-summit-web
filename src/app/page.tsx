import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import { CallToAction } from '@components/CallToAction/CallToAction';
import { Information } from '@components/Information/Information';
import { Keynotes } from '@components/Keynotes/Keynotes';
import HeroBackground from '@public/hero.webp';
import HeroLogo from '@public/hero.svg';
import BackgroundDecoration from '@public/decor.svg';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={`${styles.main} ${inter.className}`}>
			<Cover />
			<Information
				title={'ABOUT THE SUMMIT'}
				buttonLink={'/about'}
				buttonTitle={'Learn More'}
			>
				<p>
					We provide up-and-coming <span>STEM leaders</span> of{' '}
					<span>Bosnia and Herzegovina</span> the three key ingredients for
					success: <span>quality education</span>,{' '}
					<span>access to technology</span>, and{' '}
					<span>leadership development</span>.
				</p>
				<br />
				<p>
					This year, we will hear the stories of <span>leaders</span> and{' '}
					<span>organisations</span> about how they are rethinking our present
					approach to global challenges, and <span>inspire</span> us to{' '}
					<span>reimagine</span> a more <span>prosperous future</span> in which
					we take a more active role.
				</p>
			</Information>
			<CallToAction
				title={"DISCOVER THIS YEAR'S PROGRAM"}
				buttonTitle={'See Schedule'}
				buttonLink={'/schedule'}
			/>
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
