import styles from './page.module.css';
import { OverlayBottom } from '@components/OverlayBottom/OverlayBottom';
import type { Metadata } from 'next';
import Image from 'next/image';
import { title } from '@helpers/seo';
import { IKeynote } from '@interfaces/interfaces';

const getSpeaker = async (name: string): Promise<IKeynote | undefined> => {
	name = name.split('-').join(' ');

	const keynotes: IKeynote[] = require('@public/placeholder-data/keynotes.json'); //TODO: Implement actual speaker fetching
	return keynotes.find(keynote => keynote.name.toLowerCase() === name);
};

// Used instead of the metadata object for dynamic pages. Refer to NextJS docs for more info.
export async function generateMetadata({
	params,
}: {
	params: { speaker: string };
}): Promise<Metadata> {
	const speaker = await getSpeaker(params.speaker);

	if (!speaker) return {};

	return { title: `${speaker.name} | ${title}` };
}

export default async function Page({
	params,
}: {
	params: { speaker: string };
}) {
	const speaker = await getSpeaker(params.speaker);
	return (
		<>
			<div className={styles.hero}>
				{speaker && (
					<>
						<Image
							src={speaker.image}
							width={200}
							height={200}
							alt={speaker.name}
						/>
						<h1>{speaker.name}</h1>
						<p>{speaker.company}</p>
					</>
				)}
			</div>
			<OverlayBottom />
		</>
	);
}
