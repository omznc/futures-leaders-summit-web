'use client';

import styles from './Header.module.css';
import Image from 'next/image';
import { TbArrowBarUp, TbMenu } from 'react-icons/tb';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { INavigationItem } from '@/interfaces/interfaces';

const items: INavigationItem[] = [
	{ name: 'Home', url: '/' },
	{ name: 'About', url: '/about' },
	{ name: 'Speakers', url: '/speakers' },
	{ name: 'Schedule', url: '/schedule' },
	{ name: 'Sponsors & Partners', url: '/sponsors' },
	{ name: 'Gallery', url: '/gallery' },
	{ name: 'Venue', url: '/venue' },
];

const secondsUntilHeaderExpands = 1;

export default function Header() {
	const [expanded, setExpanded] = useState<boolean>(false);
	const [lastScroll, setLastScroll] = useState<number>(0);
	const [firstLoad, setFirstLoad] = useState<boolean>(true);
	const [headerHovered, setHeaderHovered] = useState<boolean>(false);
	const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false);
	const headerRef = useRef<HTMLDivElement>(null);
	const router = useRouter();
	const path = usePathname();

	// Checking if the user is scrolling up, and setting `isScrollingUp`.
	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;
			if (currentScroll < 0) return;
			setIsScrollingUp(currentScroll < lastScroll);
			setLastScroll(currentScroll);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScroll]);

	// On first load, after 2 seconds, set `expanded` to true, which will show the nav.
	useEffect(() => {
		if (firstLoad) {
			setFirstLoad(false);
			setTimeout(() => {
				setIsScrollingUp(true);
			}, secondsUntilHeaderExpands * 1000);
		}
	}, [firstLoad]);

	// While header is hovered, expanded is always true.
	useEffect(() => {
		setIsScrollingUp(true);
		const header = headerRef.current;

		const handleMouseEnter = () => setHeaderHovered(true);
		const handleMouseLeave = () => setHeaderHovered(false);

		header?.addEventListener('mouseenter', handleMouseEnter);
		header?.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			header?.removeEventListener('mouseenter', handleMouseEnter);
			header?.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, []);

	return (
		<div
			className={styles.header}
			data-expanded={expanded}
			data-enabled={expanded || isScrollingUp || headerHovered}
			ref={headerRef}
		>
			<div className={styles.logo}>
				<Image
					src="/logo.webp"
					alt="Futures Leaders Summit"
					width={900}
					height={500}
					onClick={() => router.push('/')}
				/>
			</div>
			<div
				className={styles.expandToggle}
				onClick={() => setExpanded(!expanded)}
				data-expanded={expanded}
				data-enabled={expanded || isScrollingUp}
			>
				{expanded ? (
					<TbArrowBarUp color={'white'} />
				) : (
					<TbMenu color={'white'} />
				)}
			</div>
			<div className={styles.nav} data-expanded={expanded}>
				{items.map(item => (
					<Link
						href={item.url}
						className={styles.item}
						key={item.url}
						data-current={path === item.url}
						onClick={() => setExpanded(false)}
					>
						{item.name}
					</Link>
				))}
			</div>
		</div>
	);
}
