import Link from 'next/link';
import styles from './Button.module.css';

type ButtonProps = {
	title: string;
	link: string;
	style: 'yellow' | 'white' | 'black';
};

// A component that renders a button with a link. The style can be yellow, white or black.
export function Button({ title, link, style = 'yellow' }: ButtonProps) {
	return (
		<button className={styles.button} data-button-style={style}>
			<Link href={link}>{title}</Link>
		</button>
	);
}
