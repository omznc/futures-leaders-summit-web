'use client';

import styles from './Header.module.css';
import Image from 'next/image';
import { BsArrowBarDown } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const items = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Speakers', url: '/speakers' },
    { name: 'Schedule', url: '/schedule' },
    { name: 'Sponsors & Partners', url: '/sponsors' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Venue', url: '/venue' },
];

export default function Header() {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [isScrollingUp, setIsScrollingUp] = useState<boolean>(true);
    const [lastScroll, setLastScroll] = useState<number>(0);

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

    return (
        <div
            className={styles.header}
            data-expanded={expanded}
            data-enabled={expanded || isScrollingUp}
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
