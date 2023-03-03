'use client';

import styles from './OverlayBottom.module.css';
import { Oswald } from 'next/font/google';
import { useEffect, useRef } from 'react';

const oswald = Oswald({ subsets: ['latin'] });

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
			<div className={styles.backgroundOverlayDecoration} ref={overlayRef}>
				<h1 className={oswald.className}>{`SUMMIT '${new Date()
					.getFullYear()
					.toString()
					.slice(-2)}`}</h1>
			</div>
		</div>
	);
}
