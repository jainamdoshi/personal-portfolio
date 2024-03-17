'use client'

import { IconType } from 'react-icons';

type CardProps = {
    title: string;
    description: string;
    icons: { icon: IconType; name: string; size?: number }[];
};

export default function Card(props: CardProps) {
    return (
        <div className="bg-pink-red mx-[10rem] rounded-lg mb-10 overflow-hidden shadow-pink-red">
            <div className="flex flex-row h-full">
                <div className="w-2/5 flex flex-col text-center py-3 justify-center">
                    <h3 className="text-3xl font-bold pb-2 text-shadow-black">{props.title}</h3>
                    <p className="text-2xl font-semibold text-shadow-black">{props.description}</p>
                </div>
                <div className="w-3/4 bg-white flex items-center justify-center flex-wrap px-2 space-x-2 py-2">
                    {props.icons.map((icon) => {
                        return (
                            <div key={icon.name} className="group flex flex-row text-black items-center w-[5rem] h-[5rem] relative justify-center">
                                <button data-tooltip-target={`${icon.name}-tooltip`} type="button" className="flex justify-center items-center">
                                    <icon.icon size={`${icon.size ?? 4}rem`} />
                                </button>

                                <div
                                    id={`${icon.name}-tooltip`}
                                    className={`group-hover:scale-100 scale-0 duration-200 hover:animate-scale font-light absolute bg-pink-red text-white rounded-lg w-[5rem] h-[5rem] flex items-center justify-center text-sm text-wrap`}
                                >
                                    {icon.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
