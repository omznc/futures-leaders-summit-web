import styles from './Keynotes.module.css';
import Image from 'next/image';
import { Anton } from '@next/font/google';
import { IKeynote } from '@/interfaces/interfaces';
import { Socials } from '@/components/Socials/Socials';

const keynotes: IKeynote[] = require('/public/placeholder-data/keynotes.json'); // TODO: Fetch from API
const anton = Anton({ weight: '400', subsets: ['latin'] });

// A component that receives a list of keynotes and renders them, with their socials.
export function Keynotes() {
	return (
		<div className={styles.hero_dynamic}>
			{/*<div className={ styles.backgroundOverlayFlipped }>*/}
			{/*	<Image src="/hex.svg" alt="decor" width={ 428 } height={ 653 }/>*/}
			{/*</div>*/}
			<div className={styles.keynotes}>
				<h1 className={anton.className}>KEYNOTES</h1>
				{keynotes.map(keynote => (
					<Keynote
						keynote={keynote}
						key={`${keynote.name}-${keynote.company}`}
					/>
				))}
			</div>
		</div>
	);
}

function Keynote({ keynote }: { keynote: IKeynote }) {
	return (
		<div className={styles.keynote}>
			<div className={styles.hexagon}>
				<Image src={keynote.image} alt={'San'} height={640} width={640} />
			</div>
			<div className={styles.details}>
				<h2>{keynote.name}</h2>
				<p>{keynote.company}</p>
				{keynote.socials && <Socials socials={keynote.socials} />}
			</div>
		</div>
	);
}
