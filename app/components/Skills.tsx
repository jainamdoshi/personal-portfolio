'use client';

import { IconType } from 'react-icons';
import Card from './Card';
import Title from './Misc';
import { SiJavascript, SiRuby, SiSpring, SiRubyonrails, SiChakraui, SiTailwindcss, SiApachemaven, SiMicrobit, SiFirebase, SiGnubash, SiJupyter, SiHeroku } from 'react-icons/si';
import { FaJava, FaPython, FaHtml5, FaCss3, FaReact, FaNode, FaBootstrap, FaGitAlt, FaGithub, FaAws, FaFigma, FaNpm, FaSass } from 'react-icons/fa';
import { TbBrandCpp, TbSql, TbBrandNextjs, TbBrandMysql, TbBrandVscode } from 'react-icons/tb';
import { DiSwift, DiProlog } from 'react-icons/di';
import { BiLogoTypescript } from 'react-icons/bi';

export default function Skills() {
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
        { icon: DiSwift, name: 'Swift', size: 4.5 },
        { icon: TbBrandCpp, name: 'C++' },
        { icon: FaHtml5, name: 'HTML' },
        { icon: FaCss3, name: 'CSS', size: 3.5 },
    ];

    const frameworks: CardItem[] = [
        { icon: FaNode, name: 'NodeJS', size: 4.5 },
        { icon: FaReact, name: 'ReactJS' },
        { icon: TbBrandNextjs, name: 'NextJS', size: 4.5 },
        { icon: SiSpring, name: 'SpringBoot', size: 3.75 },
        { icon: SiChakraui, name: 'Chakra UI', size: 3.85 },
        { icon: SiTailwindcss, name: 'Tailwind', size: 4.25 },
        { icon: FaBootstrap, name: 'Bootstrap' },
        { icon: FaSass, name: 'SASS' },
        { icon: SiRubyonrails, name: 'Rails', size: 4.5 },
    ];

    const technologies: CardItem[] = [
        { icon: FaGitAlt, name: 'Git' },
        { icon: SiGnubash, name: 'Bash' },
        { icon: SiApachemaven, name: 'Maven' },
        { icon: SiJupyter, name: 'Jupyter' },
        { icon: SiMicrobit, name: 'Microbit' },
    ];
    const tools: CardItem[] = [
        { icon: FaGithub, name: 'GitHub' },
        { icon: TbBrandMysql, name: 'MySQL' },
        { icon: FaAws, name: 'AWS' },
        { icon: SiFirebase, name: 'Firebase' },
        { icon: FaNpm, name: 'NPM' },
        { icon: FaFigma, name: 'Figma' },
        { icon: TbBrandVscode, name: 'VSCode', size: 4.5 },
        { icon: SiHeroku, name: 'Heroku' },
    ];

    return (
        <div id="skills" className="px-15 py-3 bg-black">
            <Title title="Skills" />
            <div className="px-10">
                <Card title="Languages" description="I know" icons={languages} />
                <Card title="Frameworks" description="I know" icons={frameworks} />
                <Card title="Technologies" description="I know" icons={technologies} />
                <Card title="Tools" description="I use" icons={tools} />
            </div>
        </div>
    );
}
