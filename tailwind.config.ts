import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                code: "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
            },
            backgroundSize: {
                code: '84% 100%',
            },
            colors: {
                'pink-red': '#f5004e',
                grey: 'rgba(198,201,216, 0.75)',
            },
            textShadow: {
                'pink-red': '-0.15rem 0.15rem 0.15rem #f5004e',
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') }
            );
        }),
    ],
};
export default config;
