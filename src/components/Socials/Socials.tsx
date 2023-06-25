import Link from 'next/link';
import styles from './style.module.css';
import {
	AiOutlineFacebook,
	AiOutlineGithub,
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineTwitter,
} from 'react-icons/ai';
import { ISocial } from '@interfaces/interfaces';
import { ReactNode } from 'react';

// This is where we add new socials.
const socialIcons: { [key: string]: ReactNode } = {
	linkedin: <AiOutlineLinkedin />,
	twitter: <AiOutlineTwitter />,
	github: <AiOutlineGithub />,
	instagram: <AiOutlineInstagram />,
	facebook: <AiOutlineFacebook />,
};

type SocialsProps = {
	socials: ISocial[];
	theme?: 'white' | 'yellow';
};

// A component that receives a list of socials and renders them as clickable icons.
export function Socials({ socials, theme = 'white' }: SocialsProps) {
	return (
		<div className={styles.socials}>
			{socials?.map(social => (
				<Link
					href={social.link}
					target={'_blank'}
					key={social.name}
					title={social.name}
				>
					<div className={styles.socialIcon} data-icon-theme={theme}>
						{socialIcons[social.name]}
					</div>
				</Link>
			))}
		</div>
	);
}
