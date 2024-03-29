import styles from './style.module.css';
import { Anton } from 'next/font/google';
import { Button } from '@components/Button/Button';
import { classes } from '@helpers/classes';

const anton = Anton({ weight: '400', subsets: ['latin'] });

type CallToActionProps = {
	title: string;
	buttonTitle: string;
	buttonLink: string;
};

// A component that renders a call to action bar, with a title and a button.
export function BarCallToAction({
	title,
	buttonTitle,
	buttonLink,
}: CallToActionProps) {
	return (
		<div className={styles.bar}>
			<h1 className={classes(styles.title, anton.className)}>
				{title.split(' ').map((item, index) => (
					<span key={`${item}-${index}`}>{item}</span>
				))}
			</h1>
			<Button link={buttonLink} title={buttonTitle} style={'black'} />
		</div>
	);
}
