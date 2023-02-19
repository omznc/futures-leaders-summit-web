import Link from 'next/link';
import styles from './Socials.module.css';
import {
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineTwitter,
} from 'react-icons/ai';
import { ISocial } from '@/interfaces/interfaces';

// This is where we add new socials.
const socialIcons: { [key: string]: JSX.Element } = {
	linkedin: <AiOutlineLinkedin />,
	twitter: <AiOutlineTwitter />,
	github: <AiOutlineGithub />,
	instagram: <AiOutlineInstagram />,
};

type SocialsProps = {
	socials: ISocial[];
};

// A component that receives a list of socials and renders them as clickable icons.
export function Socials({ socials }: SocialsProps) {
	return (
		<div className={styles.socials}>
			{socials?.map(social => (
				<Link href={social.link} target={'_blank'} key={social.name}>
					<div className={styles.socialIcon}>{socialIcons[social.name]}</div>
				</Link>
			))}
		</div>
	);
}
