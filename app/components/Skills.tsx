'use client';

import { IconType } from 'react-icons';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiProlog, DiSwift } from 'react-icons/di';
import {
	FaAws,
	FaBootstrap,
	FaCss3,
	FaDocker,
	FaFigma,
	FaGitAlt,
	FaGithub,
	FaHtml5,
	FaJava,
	FaNode,
	FaNpm,
	FaPython,
	FaReact,
	FaSass
} from 'react-icons/fa';
import {
	SiApachemaven,
	SiChakraui,
	SiFirebase,
	SiGnubash,
	SiHeroku,
	SiJavascript,
	SiJupyter,
	SiMicrobit,
	SiRuby,
	SiRubyonrails,
	SiSpring,
	SiTailwindcss
} from 'react-icons/si';
import { TbBrandCpp, TbBrandMysql, TbBrandNextjs, TbBrandVscode, TbSql } from 'react-icons/tb';
import Title from './Misc';
import SkillCard from './SkillCard';

type CardItem = {
	icon: IconType;
	name: string;
	size?: number;
};

const languages: CardItem[] = [
	{ icon: SiJavascript, name: 'JavaScript', size: 3.75 },
	{ icon: BiLogoTypescript, name: 'TypeScript', size: 5.25 },
	{ icon: FaJava, name: 'Java', size: 4.25 },
	{ icon: FaPython, name: 'Python' },
	{ icon: TbSql, name: 'SQL', size: 4.5 },
	{ icon: DiProlog, name: 'Prolog' },
	{ icon: SiRuby, name: 'Ruby', size: 3 },
	{ icon: DiSwift, name: 'Swift', size: 4.75 },
	{ icon: TbBrandCpp, name: 'C++' },
	{ icon: FaHtml5, name: 'HTML' },
	{ icon: FaCss3, name: 'CSS', size: 3.5 }
];

const frameworks: CardItem[] = [
	{ icon: FaNode, name: 'NodeJS', size: 4 },
	{ icon: FaReact, name: 'ReactJS', size: 3.5 },
	{ icon: TbBrandNextjs, name: 'NextJS', size: 4.5 },
	{ icon: SiSpring, name: 'SpringBoot', size: 3.75 },
	{ icon: SiChakraui, name: 'Chakra UI', size: 3.85 },
	{ icon: SiTailwindcss, name: 'Tailwind', size: 4.25 },
	{ icon: FaBootstrap, name: 'Bootstrap' },
	{ icon: FaSass, name: 'SASS' },
	{ icon: SiRubyonrails, name: 'Rails', size: 3.5 }
];

const technologies: CardItem[] = [
	{ icon: FaGitAlt, name: 'Git', size: 4 },
	{ icon: SiGnubash, name: 'Bash' },
	{ icon: SiApachemaven, name: 'Maven' },
	{ icon: SiJupyter, name: 'Jupyter' },
	{ icon: SiMicrobit, name: 'Microbit' }
];
const tools: CardItem[] = [
	{ icon: FaGithub, name: 'GitHub' },
	{ icon: TbBrandMysql, name: 'MySQL' },
	{ icon: FaAws, name: 'AWS' },
	{ icon: SiFirebase, name: 'Firebase' },
	{ icon: FaNpm, name: 'NPM', size: 4.75 },
	{ icon: FaFigma, name: 'Figma' },
	{ icon: TbBrandVscode, name: 'VSCode', size: 4.5 },
	{ icon: SiHeroku, name: 'Heroku', size: 3.75 },
	{ icon: FaDocker, name: 'Docker', size: 4.25 }
];

export default function Skills() {
	return (
		<div id='skills' className='max-sm:px-6 max-md:px-10 px-15 max-sm:py-1 max-md:py-2 py-3 mb-6'>
			<Title title='Skills' />
			<div className='max-sm:px-1 max-md:px-5 px-8'>
				<SkillCard title='Languages' description='I know' icons={languages} />
				<SkillCard title='Frameworks' description='I know' icons={frameworks} />
				<SkillCard title='Technologies' description='I know' icons={technologies} />
				<SkillCard title='Tools' description='I use' icons={tools} />
			</div>
		</div>
	);
}
