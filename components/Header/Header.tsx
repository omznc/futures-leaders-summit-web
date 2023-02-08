'use client';

import styles from './Header.module.css';
import Image from 'next/image';
import { BsArrowBarDown } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';

const items = [
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
    const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false);
    const [lastScroll, setLastScroll] = useState<number>(0);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const headerRef = useRef<HTMLDivElement>(null);

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
        const handleMouseEnter = () => {
            setExpanded(true);
            setIsScrollingUp(true);
        };
        const handleMouseLeave = () => {
            setExpanded(false);
            setIsScrollingUp(true);
        };
        const header = headerRef.current;
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
            data-enabled={expanded || isScrollingUp}
            ref={headerRef}
        >
            <div className={styles.logo}>
                <Image
                    src="/logo.png"
                    alt="Futures Leaders Summit"
                    width={900}
                    height={500}
                    onClick={() => (window.location.href = '/')}
                />
            </div>
            <div
                className={styles.expand_toggle}
                onClick={() => setExpanded(!expanded)}
                data-expanded={expanded}
                data-enabled={expanded || isScrollingUp}
            >
                <BsArrowBarDown color={'white'} />
            </div>
            <div className={styles.nav} data-expanded={expanded}>
                {items.map((item) => (
                    <a href={item.url} key={item.url}>
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    );
}
