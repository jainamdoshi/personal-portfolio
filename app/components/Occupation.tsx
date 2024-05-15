'use client';

import { useEffect } from 'react';
import Typed from 'typed.js';

export default function Occupation() {
    let occupationOptions: {
        strings: string[];
        typeSpeed: number;
        loop: boolean;
        backSpeed: number;
        showCursor: boolean;
        backDelay: number;
    } = {
        strings: [
            'Software Engineer',
            'Full-Stack Developer',
            'Freelancer',
            'Gamer'
        ],
        typeSpeed: 50,
        loop: true,
        backSpeed: 20,
        backDelay: 1000,
        showCursor: false,
    };

    useEffect(() => {
        const typed: Typed = new Typed('.occupation', occupationOptions);
        return () => {
            typed.destroy();
        };
    });

    return (
		<div className='occupation max-sm:h-8 max-md:h-12 h-16 max-sm:text-2xl max-md:text-4xl text-6xl font-extrabold tracking-wide max-sm:mb-2 max-md:mb-4 mb-6 text-pink-red'></div>
	);
}
