import Link from 'next/link';
import styles from './Socials.module.css';
import {
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineTwitter,
} from 'react-icons/ai';
import { IKeynote, ISocial } from '@/interfaces/interfaces';

const keynotes: IKeynote[] = require('/public/placeholder-data/keynotes.json');
const socialIcons: { [key: string]: JSX.Element } = {
	linkedin: <AiOutlineLinkedin />,
	twitter: <AiOutlineTwitter />,
	github: <AiOutlineGithub />,
	instagram: <AiOutlineInstagram />,
};

export function Socials({ socials }: { socials: ISocial[] }) {
	return (
		<div className={styles.socials}>
			{socials?.map((social, index) => (
				<Link href={social.link} target={'_blank'} key={social.name}>
					<div className={styles.socialIcon}>{socialIcons[social.name]}</div>
				</Link>
			))}
		</div>
	);
}
