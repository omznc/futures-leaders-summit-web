import styles from './style.module.css';
import Image from 'next/image';
import { Anton } from 'next/font/google';
import { ReactNode } from 'react';
import Hex from '@public/hex.svg';
import { Button } from '@components/Button/Button';
import Title from '@components/Title/Title';

const anton = Anton({ weight: '400', subsets: ['latin'] });

type InformationProps = {
	title: string;
	buttonTitle?: string;
	buttonLink?: string;
	children?: ReactNode;
};

// A component that can receive a title and a button (name, link). Formats the children as a description, adds an effect to spans.
export function Information({
	title,
	buttonTitle,
	buttonLink,
	children,
}: InformationProps) {
	const shouldRenderButton = buttonLink && buttonTitle;
	return (
		<div className={styles.hero}>
			<div className={styles.content}>
				<Title title={title} />
				<div className={styles.description}>{children}</div>
				{shouldRenderButton && (
					<Button
						title={buttonTitle}
						link={buttonLink}
						style={'yellow'}
					/>
				)}
			</div>
			<div className={styles.backgroundOverlay}>
				<Image
					src={Hex}
					alt='decor'
					width={428}
					height={653}
					priority={true}
				/>
			</div>
		</div>
	);
}
