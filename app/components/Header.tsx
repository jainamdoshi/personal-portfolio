'use client';

import Link from 'next/link';
import { FC, useCallback, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';

type NavLink = {
	label: string;
	href: string;
};

type MediaLink = {
	icon: IconType;
	href: string;
};

type Links = {
	navLinks: NavLink[];
	mediaLinks: MediaLink[];
};

const links: Links = {
	navLinks: [
		{
			label: 'Home',
			href: '#home'
		},
		{
			label: 'Skills',
			href: '#skills'
		},
		{
			label: 'Projects',
			href: '#projects'
		},
		{
			label: 'About Me',
			href: '#about-me'
		}
	],
	mediaLinks: [
		{
			icon: FaLinkedinIn,
			href: 'https://www.linkedin.com/in/jamdos'
		},
		{
			icon: FaGithub,
			href: 'https://github.com/jainamdoshi'
		},
		{
			icon: MdEmail,
			href: 'mailto:jainam.doshi2001@gmail.com'
		}
	]
};

export default function Header() {
	const [activeItem, setActiveItem] = useState<NavLink>(links.navLinks[0]);
	const [scrollY, setScrollY] = useState(0);

	const onScroll = useCallback((event: Event) => {
		setScrollY(window.scrollY);
		if (window.scrollY < 550) {
			setActiveItem(links.navLinks[0]);
		} else if (window.scrollY >= 550 && window.scrollY < 1350) {
			setActiveItem(links.navLinks[1]);
		} else if (window.scrollY >= 1350 && window.scrollY < 3100) {
			setActiveItem(links.navLinks[2]);
		} else {
			setActiveItem(links.navLinks[3]);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', onScroll, { passive: true });
		setScrollY(window.scrollY);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [onScroll]);

	return (
		<header
			className={`${
				scrollY >= 70 ? 'bg-[#131313]' : 'bg-transparent'
			} sticky top-0 duration-500 px-1 pt-1 pb-4 z-50`}
		>
			<NavigationMenu className='max-w-full flex flex-row justify-between pt-5 z-50 duration-500'>
				<NavigationMenuList asChild>
					<div className='flex flex-row justify-between pl-3 mt-3'>
						{links.navLinks.map((item) => (
							<NavLink
								key={item.label}
								item={item}
								isActive={item.label === activeItem.label}
								setActiveItem={setActiveItem}
							/>
						))}
					</div>
				</NavigationMenuList>
				<NavigationMenuList asChild>
					<div className='flex flex-row justify-between content-start pr-2'>
						{links.mediaLinks.map((item, index) => (
							<MediaLink key={index} item={item} />
						))}
						<Link
							href='https://jainam-doshi-public.s3.ap-southeast-2.amazonaws.com/Jainam+Doshi+Resume.pdf'
							className='text-lg rounded-lg font-semibold px-3 duration-200 bg-pink-red hover:bg-white hover:text-pink-red py-[0.1rem]'
						>
							Resume
						</Link>
					</div>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
}

const NavLink: FC<{ item: NavLink; isActive: boolean; setActiveItem: (item: NavLink) => void }> = ({
	item,
	isActive,
	setActiveItem
}) => {
	return (
		<NavigationMenuItem asChild>
			<Link href={item.href} legacyBehavior passHref>
				<NavigationMenuLink
					className={navigationMenuTriggerStyle({ intent: 'navItem' })}
					onClick={() => setActiveItem(item)}
				>
					<span className=''>{item.label}</span>
					<span className={`w-full bg-pink-red h-1 mt-3 ${isActive ? 'visible' : 'invisible'}`}></span>
				</NavigationMenuLink>
			</Link>
		</NavigationMenuItem>
	);
};

const MediaLink: FC<{ item: MediaLink }> = ({ item }) => {
	const Icon: IconType = item.icon;
	return (
		<NavigationMenuItem asChild>
			<Link
				href={item.href}
				passHref
				target='_blank'
				rel='noopener noreferrer'
				className='px-1 hover:text-pink-red duration-200'
			>
				<NavigationMenuLink>
					<Icon size={'1.65rem'} />
				</NavigationMenuLink>
			</Link>
		</NavigationMenuItem>
	);
};

// export default function Header() {
//     const [selectedLink, setSelectedLink] = useState('home');
//     const [scrollY, setScrollY] = useState(0);

//     const onScroll = useCallback((event: Event) => {
//         setScrollY(window.scrollY);
//         if (window.scrollY < 550) {
//             setSelectedLink('home');
//         } else if (window.scrollY >= 550 && window.scrollY < 1350) {
//             setSelectedLink('skills');
//         } else if (window.scrollY >= 1350 && window.scrollY < 3100) {
//             setSelectedLink('projects');
//         } else {
//             setSelectedLink('about me');
//         }
//     }, []);

//     useEffect(() => {
//         window.addEventListener('scroll', onScroll, { passive: true });
//         setScrollY(window.scrollY);

//         return () => {
//             window.removeEventListener('scroll', onScroll);
//         };
//     }, [onScroll]);

//     return (
//         <header className={`${scrollY >= 70 ? 'bg-[#131313]' : 'bg-transparent'} sticky top-0 w-full flex flex-row justify-between pt-5 z-50 duration-500`}>
//             <div className="w-2/5 to-left">
//                 <ul className="flex justify-between items-center py-4 px-12">
//                     <NavLink label="Home" selected={selectedLink == 'home'} action={setSelectedLink} />
//                     <NavLink label="Skills" selected={selectedLink == 'skills'} action={setSelectedLink} />
//                     <NavLink label="Projects" selected={selectedLink == 'projects'} action={setSelectedLink} />
//                     <NavLink label="About Me" selected={selectedLink == 'about me'} action={setSelectedLink} />
//                 </ul>
//             </div>
//             <div className="w-1/4 to-right">
//                 <ul className="flex justify-between items-center py-4 px-12">
//                     <MediaLink icon={FaLinkedinIn} href="https://www.linkedin.com/in/jamdos" />
//                     <MediaLink icon={FaGithub} href="https://github.com/jainamdoshi" />
//                     <MediaLink icon={MdEmail} href="mailto:jainam.doshi2001@gmail.com" />
//                     <Link
//                         href="https://jainam-doshi-public.s3.ap-southeast-2.amazonaws.com/Jainam+Doshi+Resume.pdf"
//                         className="text-lg rounded-lg font-semibold px-4 duration-200 bg-pink-red hover:bg-white hover:text-pink-red py-[0.1rem]"
//                     >
//                         Resume
//                     </Link>
//                 </ul>
//             </div>
//         </header>
//     );
// }

// type InnerLinkProps = {
//     onClick: MouseEventHandler<HTMLAnchorElement>;
//     label: string;
//     selected: boolean;
// };

// const InnerLink = forwardRef<HTMLAnchorElement, InnerLinkProps>((props, ref) => {
//     return (
//         <li>
//             <div className="flex flex-col">
//                 <a ref={ref} onClick={props.onClick} className="hover:text-pink-red font-semibold text-2xl md:text-xl duration-200">
//                     {props.label}
//                 </a>
//                 <span className={`w-full bg-pink-red h-1 mt-3 ${props.selected ? 'visible' : 'invisible'}`}></span>
//             </div>
//         </li>
//     );
// });
// InnerLink.displayName = 'InnerLink';

// type NavLinkProps = {
//     label: string;
//     selected: boolean;
//     action: (label: string) => void;
// };

// const NavLink: FC<NavLinkProps> = (props) => {
//     return (
//         <Link passHref legacyBehavior href={`#${props.label.toLowerCase()}`}>
//             <InnerLink label={props.label} selected={props.selected} onClick={() => props.action(props.label.toLowerCase())} />
//         </Link>
//     );
// };

// type MediaLinkProps = {
//     icon: IconType;
//     href: string;
// };

// const MediaLink: FC<MediaLinkProps> = (props) => {
//     return (
//         <a href={props.href} target="_blank" rel="noopener noreferrer" className="hover:text-pink-red duration-200">
//             <props.icon size={'1.85rem'} />
//         </a>
//     );
// };
