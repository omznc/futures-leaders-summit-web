import styles from './style.module.css';
import { Anton } from 'next/font/google';
import { classes } from '@helpers/classes';

const anton = Anton({ weight: '400', subsets: ['latin'] });

type CallToActionProps = {
	title: string;
	description: string;
};

// A component that renders a call to action bar, with a title and a button.
export function BarInformation({ title, description }: CallToActionProps) {
	return (
		<div className={styles.bar}>
			<h1 className={classes(styles.title, anton.className)}>
				{title.split(' ').map(item => (
					<span key={item}>{item}</span>
				))}
			</h1>
			<p className={styles.description}>{description}</p>
		</div>
	);
}
