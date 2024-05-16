import Image from 'next/image';
import { FC, ReactNode } from 'react';
import Career from './Career';
import Title from '../components/ui/Misc';

const paragraphs = [
	'With an enthusiasm for science and technology that has been ingrained in me since childhood, I have always been drawn to the thrill of solving problems and reveling in those "Ah-hah" moments when faced with challenges.',
	'My journey into the world of programming began during my middle school years, where I was introduced to the fascinating realm of making a computer obey my commands with just a few keystrokes. This experience ignited a passion within me to code and create more of those gratifying "Ah-hah" moments, not only for myself but also for the teams I collaborate with.',
	'One of my most significant accomplishments in the technology domain was achieving victory as part of a team that clinched "The Best Performance Award" at the highly competitive World Education Robot competition, triumphing over 5000 competing teams. This prestigious robotics contest not only elevated my programming and problem-solving skills to new heights but also honed my abilities in effective communication and leadership.',
	'The invaluable experience gained from the robotics competition reinforced my resolve to pursue a degree in Software Engineering at RMIT University. A standout aspect of my personality is my innate capacity to swiftly grasp new skills and programming languages, which has proven instrumental in my academic and professional pursuits. My unwavering dedication to learning and my penchant for creating technological marvels drive me to continuously push the boundaries of my capabilities in the dynamic world of science and technology.'
];

export default function About() {
	return (
		<div id='about-me' className='max-sm:px-7 max-md:px-12 px-16'>
			<Title title='About Me' />
			<div className='flex max-lg:flex-col flex-row max-sm:mt-0 mt-5'>
				<div className='m-5'>
					<Image
						src='https://jainam-doshi-public.s3.ap-southeast-2.amazonaws.com/Jainam+Photo.jpg'
						alt='Jainam Doshi'
						className='rounded-xl p-4'
						width={2500}
						height={4000}
					/>
				</div>
				<div className='max-sm:px-2 max-md:px-3 px-5 mt-5 max-sm:pe-0 max-md:pe-0 pe-2'>
					{paragraphs.map((para, index) => {
						return <AboutMePara key={index}>{para}</AboutMePara>;
					})}
				</div>
			</div>
			<div className='py-5 max-md:mt-1 mt-3 flex justify-center max-sm:px-0 max-md:px-5 max-lg:px-10 px-20'>
				<Career />
			</div>
		</div>
	);
}

type AboutMeParaProps = {
	children?: ReactNode;
};

const AboutMePara: FC<AboutMeParaProps> = (props) => {
	return <p className='pb-5 text-grey max-sm:text-sm max-md:text-md text-lg text-justify'>{props.children}</p>;
};
