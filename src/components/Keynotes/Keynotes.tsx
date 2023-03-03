import styles from './Keynotes.module.css';
import Image from 'next/image';
import { Anton } from 'next/font/google';
import { IKeynote } from '@interfaces/interfaces';
import { Socials } from '@components/Socials/Socials';

const anton = Anton({ weight: '400', subsets: ['latin'] });

/**
 * Fetches keynotes from the API. This is a placeholder for now.
 */
const getKeynotes = async (): Promise<IKeynote[]> => {
	const keynotes: IKeynote[] = require('@public/placeholder-data/keynotes.json');
	return keynotes;
};

// A component that receives a list of keynotes and renders them, with their socials.
export async function Keynotes() {
	const keynotes = await getKeynotes();

	return (
		<div className={styles.heroDynamic}>
			{/*<div className={ styles.backgroundOverlayFlipped }>*/}
			{/*	<Image src="/hex.svg" alt="decor" width={ 428 } height={ 653 }/>*/}
			{/*</div>*/}
			<div className={styles.keynotes}>
				<h1 className={anton.className}>KEYNOTES</h1>
				{keynotes.map(keynote => (
					<Keynote
						keynote={keynote}
						key={[keynote.name, keynote.company].join('-')}
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
				<Image
					src={keynote.image}
					alt={`${keynote.name}'s Photo`}
					height={640}
					width={640}
				/>
			</div>
			<div className={styles.details}>
				<h2>{keynote.name}</h2>
				<p>{keynote.company}</p>
				{keynote.socials && <Socials socials={keynote.socials} />}
			</div>
		</div>
	);
}
