import styles from './Information.module.css';
import Image from 'next/image';
import { Anton } from '@next/font/google';
import Link from 'next/link';

const anton = Anton({ weight: '400', subsets: ['latin'] });

// A component that can receive a title, description (as a string that can contain spans) and a button (name, link)
export function Information({
	title,
	content,
	buttonTitle,
	buttonLink,
}: {
	title: string;
	content: string[];
	buttonTitle: string;
	buttonLink: string;
}) {
	return (
		<div className={styles.hero}>
			<div className={styles.content}>
				<h1 className={[styles.title, anton.className].join(' ')}>{title}</h1>
				{content?.map((paragraph, index) => {
					return (
						<p className={styles.description} key={index}>
							{paragraph.split(/(\s+)/).map(item => {
								return item.match(/\*/g)?.length === 2 ? (
									<span key={item}> {item.replace(/\*/g, '')} </span>
								) : (
									item
								);
							})}
						</p>
					);
				})}
				{buttonTitle && buttonLink && (
					<button>
						<Link href={buttonLink}>{buttonTitle}</Link>
					</button>
				)}
			</div>
			<div className={styles.backgroundOverlay}>
				<Image src="/hex.svg" alt="decor" width={428} height={653} />
			</div>
		</div>
	);
}
