import styles from './Information.module.css';
import Image from 'next/image';
import { Anton } from '@next/font/google';
import Link from 'next/link';
import { ReactNode } from 'react';
import Hex from '@/public/hex.svg';

const anton = Anton({ weight: '400', subsets: ['latin'] });

type InformationProps = {
	title: string;
	buttonTitle: string;
	buttonLink: string;
	children?: ReactNode;
};

// A component that can receive a title and a button (name, link). Formats the children as a description, adds an effect to spans.
export function Information({
	title,
	buttonTitle,
	buttonLink,
	children,
}: InformationProps) {
	return (
		<div className={styles.hero}>
			<div className={styles.content}>
				<h1 className={[styles.title, anton.className].join(' ')}>{title}</h1>
				<div className={styles.description}>{children}</div>
				{buttonTitle && buttonLink && (
					<Link href={buttonLink}>
						<button>{buttonTitle}</button>
					</Link>
				)}
			</div>
			<div className={styles.backgroundOverlay}>
				<Image src={Hex} alt="decor" width={428} height={653} />
			</div>
		</div>
	);
}
