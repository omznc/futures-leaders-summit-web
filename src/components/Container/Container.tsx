import styles from './style.module.css';
import { ReactNode } from 'react';
import { Anton } from 'next/font/google';
import Title from '@components/Title/Title';

const anton = Anton({ weight: '400', subsets: ['latin'] });

type ContainerProps = {
	children: ReactNode;
	title?: string;
};

export function Container({ children, title }: ContainerProps) {
	return (
		<div className={styles.container}>
			{title && <Title title={title} />}
			{children}
		</div>
	);
}
