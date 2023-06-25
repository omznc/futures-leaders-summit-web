'use client';

import {
	FaCarAlt,
	FaMoneyCheck,
	FaSignOutAlt,
	FaStar,
	FaTags,
	FaUsers,
} from 'react-icons/fa';
import {
	BsLayoutTextSidebar,
	BsLayoutTextSidebarReverse,
} from 'react-icons/bs';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';
import FLSLogo from '@public/logos/logo-fls.svg';
import FLSLogoSmall from '@public/logos/logo-fls-small.svg';
import Image from 'next/image';
import useUserStore from '@/src/stores/userStore';
import styles from './style.module.css';

const sidebarEntries = [
	{
		title: 'Payments',
		link: '/admin/payments',
		icon: <FaMoneyCheck />,
	},
	{
		title: 'Registrations',
		link: '/admin/registrations',
		icon: <FaUsers />,
	},
	{
		title: 'Travel Grants',
		link: '/admin/travel-grants',
		icon: <FaCarAlt />,
	},
	{
		title: 'Discounts',
		link: '/admin/discounts',
		icon: <FaTags />,
	},
	{
		title: 'Supporters',
		link: '/admin/supporters',
		icon: <FaStar />,
	},
	// {
	// 	title: 'Main Website',
	// 	link: '/',
	// 	icon: <FaHome />,
	// },
];

export default function Sidebar() {
	const [expanded, setExpanded] = useState(true);
	const { clearUser } = useUserStore();

	return (
		<div
			className={`${
				expanded ? 'w-[300px]' : 'w-[110px]'
			} brightness-125 ${
				styles.slideInRight
			} bg-secondary-gray px-4 py-12 h-screen justify-between flex flex-col border-r-[1px] border-white border-opacity-10 transition-all`}
		>
			<div className='flex flex-col h-1/2 min-h-[350px] gap-8 select-none'>
				<div className='flex h-1/4 overflow-hidden  flex-col gap-2'>
					<div
						className={`w-[250px] h-fit transition-all ${
							expanded ? 'justify-center' : 'justify-start'
						} items-center flex`}
					>
						{expanded ? (
							<Image src={FLSLogo} alt='FLS Logo' height={82} />
						) : (
							<Image
								src={FLSLogoSmall}
								alt='FLS Logo'
								width={75}
								height={75}
							/>
						)}
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					{sidebarEntries.map(entry => (
						<SidebarEntry
							key={entry.title}
							title={entry.title}
							link={entry.link}
							icon={entry.icon}
							expanded={expanded}
						/>
					))}
				</div>
			</div>

			<div className='w-full flex select-none flex-col gap-2'>
				<div
					className={`flex gap-4  items-center h-10 rounded-xl cursor-pointer bg-opacity-0 bg-white transition-all hover:bg-opacity-20 w-full px-4 py-2 text-center border-[1px] border-white border-opacity-5 ${
						!expanded && 'justify-center items-center'
					}`}
					onClick={() => setExpanded(!expanded)}
				>
					<div
						className={`flex items-center ${
							expanded ? 'ml-0' : 'w-full ml-4'
						} transition-all`}
						style={{ minWidth: expanded ? 'auto' : '16px' }}
					>
						{expanded ? (
							<BsLayoutTextSidebar />
						) : (
							<BsLayoutTextSidebarReverse />
						)}
					</div>
					<span
						className={`${
							expanded ? 'opacity-100' : 'opacity-0'
						} transition-opacity duration-200`}
					>
						{expanded && 'Collapse'}{' '}
					</span>
				</div>
				<Link
					onClick={() => clearUser()}
					href='/admin'
					className={`flex gap-4 justify-start items-center h-10 rounded-xl bg-red-500 bg-opacity-10 transition-all hover:bg-opacity-100 w-full px-4 py-2 text-center border-[1px] border-white border-opacity-10 ${
						!expanded && 'justify-center items-center'
					}`}
				>
					<div
						className={`flex items-center ${
							expanded ? 'ml-0' : 'w-full ml-4'
						} transition-all`}
						style={{ minWidth: expanded ? 'auto' : '16px' }}
					>
						<FaSignOutAlt />
					</div>
					<span
						className={`${
							expanded ? 'opacity-100' : 'opacity-0'
						} transition-opacity duration-200`}
					>
						{expanded && 'Logout'}
					</span>
				</Link>
			</div>
		</div>
	);
}

function Tooltip({ children }: { children: ReactNode }) {
	return (
		<div className='relative'>
			<div className='absolute top-0 left-full ml-8 text-black bg-white whitespace-nowrap flex items-center justify-center bg-opacity-100 w-fit h-10 rounded-xl shadow-lg p-4'>
				{children}
			</div>
		</div>
	);
}

type SidebarEntryProps = {
	title: string;
	link: string;
	icon: ReactNode;
	expanded?: boolean;
};

function SidebarEntry({ title, link, icon, expanded }: SidebarEntryProps) {
	const pathname = usePathname();
	const active = pathname === link;
	const [tooltipOpen, setTooltipOpen] = useState(false);

	return (
		<div className='h-10'>
			{tooltipOpen && !expanded && <Tooltip>{title}</Tooltip>}
			<Link
				href={link}
				className={`text-white h-full flex justify-start items-center gap-4 text-md overflow-hidden whitespace-nowrap rounded-xl px-4 py-2 transition-all border-[1px] border-white border-opacity-10 ${
					active
						? 'opacity-100 bg-white bg-opacity-10 hover:bg-opacity-30'
						: 'opacity-50 hover:opacity-100 hover:bg-white hover:bg-opacity-10'
				}`}
				onMouseEnter={() => setTooltipOpen(true)}
				onMouseLeave={() => setTooltipOpen(false)}
			>
				<div
					className={`flex items-center ${
						expanded ? 'ml-0' : 'ml-4'
					} transition-all`}
					style={{ minWidth: expanded ? 'auto' : '16px' }}
				>
					{icon}
				</div>
				<span
					className={`${
						expanded ? 'opacity-100' : 'opacity-0'
					} transition-opacity duration-200`}
				>
					{title}
				</span>
			</Link>
		</div>
	);
}
