'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { FC } from 'react';
import { IconType } from 'react-icons';
import Autoplay from 'embla-carousel-autoplay';

type CardProps = {
	title: string;
	description: string;
	icons: Icon[];
};

type Icon = {
	icon: IconType;
	name: string;
	size?: number;
};

export default function SkillCard(props: CardProps) {
	return (
		<div className='bg-pink-red max-sm:mx-0 max-md:mx-1 mx-[8.5rem] rounded-lg mb-10 overflow-hidden shadow-pink-red'>
			<div className='flex flex-row h-full'>
				<div className='w-2/5 flex flex-col text-center py-3 justify-center'>
					<h3 className='max-sm:text-sm max-md:text-md text-3xl max-sm:font-medium max-md:font-semibold font-bold pb-2 text-shadow-black'>
						{props.title}
					</h3>
					<p className='max-sm:text-sm max-md:text-lg text-2xl max-sm:font-normal max-md:font-medium font-semibold text-shadow-black'>
						{props.description}
					</p>
				</div>
				<div className='w-3/4 bg-white'>
					<SkillCarousel icons={props.icons} />
				</div>
			</div>
		</div>
	);
}

const SkillIcon: FC<{ icon: Icon }> = ({ icon }) => {
	return (
		<div className='group flex flex-row text-black items-center w-[5rem] h-[5rem] relative justify-center'>
			<button
				data-tooltip-target={`${icon.name}-tooltip`}
				type='button'
				className='flex justify-center items-center'
			>
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
};

const SkillCarousel: FC<{ icons: Icon[] }> = ({ icons }) => {

    while (icons.length < 20) {
        icons = icons.concat(icons);
    }

	return (
		<Carousel
			opts={{
				align: 'start',
				dragFree: true,
				loop: true
			}}
			plugins={[Autoplay({ stopOnInteraction: false, delay: 1500, stopOnMouseEnter: true })]}
		>
			<CarouselContent className='-ml-1 mt-[0.37rem]'>
				{Array.from({ length: icons.length }).map((_, index) => (
					<CarouselItem key={index} className='max-sm:basis-1/4 max-md:basis-1/6 basis-1/10'>
						<div className='p-1'>
							<SkillIcon icon={icons[index]} />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};
