'use client';

import Link from 'next/link';
import { FC, forwardRef, MouseEvent, MouseEventHandler, ReactNode, Ref, useState } from 'react';

export default function Header() {
    const [selectedLink, setSelectedLink] = useState('Home');

    return (
        <div className="bg-transparent absolute w-full">
            <div className="w-2/5 mt-5 ml-2">
                <ul className="flex justify-between items-center py-4 px-12">
                    <NavLink label="Home" selected={selectedLink == 'Home'} action={setSelectedLink} />
                    <NavLink label="About" selected={selectedLink == 'About'} action={setSelectedLink} />
                    <NavLink label="Skills" selected={selectedLink == 'Skills'} action={setSelectedLink} />
                    <NavLink label="Projects" selected={selectedLink == 'Projects'} action={setSelectedLink} />
                    <NavLink label="Contact" selected={selectedLink == 'Contact'} action={setSelectedLink} />
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
                <span className={`w-full bg-pink-red h-1 mt-3 ${props.selected ? "visible" : "invisible"}`}></span>
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
