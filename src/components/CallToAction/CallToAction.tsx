import styles from './CallToAction.module.css';
import { Anton } from 'next/font/google';
import { Button } from '@components/Button/Button';

const anton = Anton({ weight: '400', subsets: ['latin'] });

type CallToActionProps = {
	title: string;
	buttonTitle: string;
	buttonLink: string;
};

// A component that renders a call to action bar, with a title and a button.
export function CallToAction({
	title,
	buttonTitle,
	buttonLink,
}: CallToActionProps) {
	return (
		<div className={styles.callToActionBar}>
			<h1 className={[styles.title, anton.className].join(' ')}>
				{title.split(' ').map(item => (
					<span key={item}>{item}</span>
				))}
			</h1>
			<Button link={buttonLink} title={buttonTitle} style={'black'} />
		</div>
	);
}
