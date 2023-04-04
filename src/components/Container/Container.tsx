import styles from './Container.module.css';
import React from 'react';
import { Anton } from 'next/font/google';

const anton = Anton({ weight: '400', subsets: ['latin'] });

type ContainerProps = {
	children: React.ReactNode;
	title?: string;
};

export function Container({ children, title }: ContainerProps) {
	return (
		<div className={styles.container}>
			{title && <h1 className={anton.className}>{title}</h1>}
			{children}
		</div>
	);
}
