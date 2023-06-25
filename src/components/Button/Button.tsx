import Link from 'next/link';
import styles from './style.module.css';
import { ReactNode } from 'react';

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

type AdminPanelButtonProps = {
	title: string;
	onClick?: () => void;
	icon?: ReactNode;
	customStyle?: string;
	disabled?: boolean;
};

export function AdminPanelButton({
	title,
	onClick,
	icon,
	customStyle,
	disabled,
}: AdminPanelButtonProps) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`flex gap-4 active:scale-95 justify-center items-center h-10 rounded-xl cursor-pointer bg-opacity-10 bg-white transition-all hover:bg-opacity-20 w-full px-4 py-2 text-center border-[1px] border-white border-opacity-5 ${customStyle} disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-opacity-10 disabled:active:scale-100`}
		>
			{icon}
			{title}
		</button>
	);
}
