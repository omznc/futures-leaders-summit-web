import Link from 'next/link';
import styles from './style.module.css';

type ButtonProps = {
	title: string;
	link?: string;
	style: 'yellow' | 'white' | 'black';
};

// A component that renders a button with a link. The style can be yellow, white or black.
export function Button({ title, link, style = 'yellow' }: ButtonProps) {
	return (
		<button
			className={styles.button}
			data-button-style={style}
			title={title}
			type={link ? 'button' : 'submit'}
		>
			{link && (
				<Link href={link} title={title}>
					{title}
				</Link>
			)}
			{!link && title}
		</button>
	);
}
