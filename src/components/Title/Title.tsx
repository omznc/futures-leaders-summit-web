import styles from './style.module.css';
import { Anton } from 'next/font/google';
import { classes } from '@helpers/classes';

const anton = Anton({ weight: '400', subsets: ['latin'] });

type TitleProps = {
	title: string;
};
export default function Title({ title }: TitleProps) {
	return (
		<>
			<h1 className={classes(styles.title, anton.className)}>{title}</h1>
		</>
	);
}
