'use client';

import Link from 'next/link';
import { FC, forwardRef, MouseEventHandler, useState } from 'react';
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GrDocumentPdf } from "react-icons/gr";

export default function Header() {
    const [selectedLink, setSelectedLink] = useState('Home');

    return (
        <div className="bg-transparent absolute w-full flex flex-row justify-between mt-5">
            <div className="w-2/5 to-left">
                <ul className="flex justify-between items-center py-4 px-12">
                    <NavLink label="Home" selected={selectedLink == 'Home'} action={setSelectedLink} />
                    <NavLink label="About" selected={selectedLink == 'About'} action={setSelectedLink} />
                    <NavLink label="Skills" selected={selectedLink == 'Skills'} action={setSelectedLink} />
                    <NavLink label="Projects" selected={selectedLink == 'Projects'} action={setSelectedLink} />
                    <NavLink label="Contact" selected={selectedLink == 'Contact'} action={setSelectedLink} />
                </ul>
            </div>
            <div className="w-1/4 to-right">
                <ul className="flex justify-between items-center py-4 px-12">
                    <MediaLink icon={FaLinkedinIn} href="https://www.linkedin.com/in/jamdos" />
                    <MediaLink icon={FaGithub} href="https://github.com/jainamdoshi" />
                    <MediaLink icon={MdEmail} href="mailto:jainam.doshi2001@gmail.com" />
                    <MediaLink icon={GrDocumentPdf} href="https://jainam-doshi-public.s3.ap-southeast-2.amazonaws.com/Jainam+Doshi+Resume.pdf" />
                </ul>
            </div>
        </div>
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
                <a ref={ref} onClick={props.onClick} className="hover:text-pink-red font-semibold text-2xl duration-200">
                    {props.label}
                </a>
                <span className={`w-full bg-pink-red h-1 mt-3 ${props.selected ? 'visible' : 'invisible'}`}></span>
            </div>
        </li>
    );
});

type NavLinkProps = {
    label: string;
    selected: boolean;
    action: (label: string) => void;
};

const NavLink: FC<NavLinkProps> = (props) => {
    return (
        <Link passHref legacyBehavior href={`#${props.label}`}>
            <InnerLink label={props.label} selected={props.selected} onClick={() => props.action(props.label)} />
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
            <props.icon className="w-7 h-7" />
        </a>
    );
};
