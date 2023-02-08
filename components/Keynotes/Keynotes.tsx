import styles from './Keynotes.module.css';
import Image from 'next/image';
import { Anton } from '@next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

export function Keynotes({
	keynotes,
}: {
	keynotes: {
		name: string;
		company: string;
		image: string;
	}[];
}) {
	return (
		<div className={styles.hero_dynamic}>
			{/*<div className={ styles.backgroundOverlayFlipped }>*/}
			{/*	<Image src="/hex.svg" alt="decor" width={ 428 } height={ 653 }/>*/}
			{/*</div>*/}
			<div className={styles.keynotes}>
				<h1 className={anton.className}>KEYNOTES</h1>
				{keynotes.map((keynote, index) => (
					<Keynote keynote={keynote} key={index} />
				))}
			</div>
		</div>
	);
}

function Keynote({
	keynote,
}: {
	keynote: { name: string; company: string; image: string };
}) {
	return (
		<div className={styles.keynote}>
			<div className={styles.hexagon}>
				<Image src={keynote.image} alt={'San'} height={640} width={640} />
			</div>
			<div className={styles.details}>
				<h2>{keynote.name}</h2>
				<p>{keynote.company}</p>
				<div className={styles.socials}>
					<p>1</p>
					<p>2</p>
					<p>3</p>
				</div>
			</div>
		</div>
	);
}
