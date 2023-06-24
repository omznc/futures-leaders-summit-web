'use client';

import styles from './style.module.css';
import { Anton, Oswald } from 'next/font/google';
import { useEffect, useRef } from 'react';
import { classes } from '@helpers/classes';

const oswald = Oswald({ subsets: ['latin'] });
const anton = Anton({ weight: '400', subsets: ['latin'] });

const year = new Date().getFullYear(); // Or just set manually

export function OverlayBottom() {
	const overlayRef = useRef<HTMLDivElement>(null);

	// Used to animate the overlay text (SUMMIT '23) when the user scrolls down to it.
	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries?.forEach(entry => {
				if (entry?.isIntersecting) {
					overlayRef.current?.classList.add(styles.active);
				} else {
					overlayRef.current?.classList.remove(styles.active);
				}
			});
		});

		observer?.observe(overlayRef.current!);
	}, []);

	return (
		<div className={styles.heroDynamic}>
			<div className={classes(styles.title, anton.className)}>
				<span>FUTURES</span>
				<span>LEADERS</span>
				<span>{`SUMMIT '${year.toString().slice(2)}`}</span>
			</div>
			<div
				className={styles.backgroundOverlayDecoration}
				ref={overlayRef}
			>
				<h1 className={oswald.className}>{`SUMMIT '${year
					.toString()
					.slice(2)}`}</h1>
			</div>
		</div>
	);
}
