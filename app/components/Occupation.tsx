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
        <div className="occupation h-16 text-6xl font-extrabold tracking-wide mb-6 text-pink-red"></div>
    );
}
