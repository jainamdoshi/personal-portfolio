'use client';

import Link from 'next/link';
import { FC, forwardRef, MouseEventHandler, useCallback, useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GrDocumentPdf } from 'react-icons/gr';

export default function Header() {
    const [selectedLink, setSelectedLink] = useState('home');
    const [scrollY, setScrollY] = useState(0);

    const onScroll = useCallback((event: Event) => {
        setScrollY(window.scrollY);
        if (window.scrollY < 550) {
            setSelectedLink('home');
        } else if (window.scrollY >= 550 && window.scrollY < 1350) {
            setSelectedLink('skills');
        } else if (window.scrollY >= 1350 && window.scrollY < 3100) {
            setSelectedLink('projects');
        } else {
            setSelectedLink('about me');
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
        <header className={`${scrollY >= 70 ? 'bg-[#131313]' : 'bg-transparent'} sticky top-0 w-full flex flex-row justify-between pt-5 z-50 duration-500`}>
            <div className="w-2/5 to-left">
                <ul className="flex justify-between items-center py-4 px-12">
                    <NavLink label="Home" selected={selectedLink == 'home'} action={setSelectedLink} />
                    <NavLink label="Skills" selected={selectedLink == 'skills'} action={setSelectedLink} />
                    <NavLink label="Projects" selected={selectedLink == 'projects'} action={setSelectedLink} />
                    <NavLink label="About Me" selected={selectedLink == 'about me'} action={setSelectedLink} />
                </ul>
            </div>
            <div className="w-1/4 to-right">
                <ul className="flex justify-between items-center py-4 px-12">
                    <MediaLink icon={FaLinkedinIn} href="https://www.linkedin.com/in/jamdos" />
                    <MediaLink icon={FaGithub} href="https://github.com/jainamdoshi" />
                    <MediaLink icon={MdEmail} href="mailto:jainam.doshi2001@gmail.com" />
                    <Link
                        href="https://jainam-doshi-public.s3.ap-southeast-2.amazonaws.com/Jainam+Doshi+Resume.pdf"
                        className="text-lg rounded-lg font-semibold px-4 duration-200 bg-pink-red hover:bg-white hover:text-pink-red py-[0.1rem]"
                    >
                        Resume
                    </Link>
                </ul>
            </div>
        </header>
    );
}

type InnerLinkProps = {
    onClick: MouseEventHandler<HTMLAnchorElement>;
    label: string;
    selected: boolean;
};

const InnerLink = forwardRef<HTMLAnchorElement, InnerLinkProps>((props, ref) => {
    return (
        <li>
            <div className="flex flex-col">
                <a ref={ref} onClick={props.onClick} className="hover:text-pink-red font-semibold text-2xl md:text-xl duration-200">
                    {props.label}
                </a>
                <span className={`w-full bg-pink-red h-1 mt-3 ${props.selected ? 'visible' : 'invisible'}`}></span>
            </div>
        </li>
    );
});
InnerLink.displayName = 'InnerLink';

type NavLinkProps = {
    label: string;
    selected: boolean;
    action: (label: string) => void;
};

const NavLink: FC<NavLinkProps> = (props) => {
    return (
        <Link passHref legacyBehavior href={`#${props.label.toLowerCase()}`}>
            <InnerLink label={props.label} selected={props.selected} onClick={() => props.action(props.label.toLowerCase())} />
        </Link>
    );
};

type MediaLinkProps = {
    icon: IconType;
    href: string;
};

const MediaLink: FC<MediaLinkProps> = (props) => {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className="hover:text-pink-red duration-200">
            <props.icon size={'1.85rem'} />
        </a>
    );
};
