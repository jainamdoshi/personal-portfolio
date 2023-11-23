import { FC, ReactNode } from 'react';
import Title from './Misc';
import { Tab, TabNav } from './Tab';

export default function About() {
    const paragraphs = [
        'With an enthusiasm for science and technology that has been ingrained in me since childhood, I have always been drawn to the thrill of solving problems and reveling in those "Ah-hah" moments when faced with challenges.',
        'My journey into the world of programming began during my middle school years, where I was introduced to the fascinating realm of making a computer obey my commands with just a few keystrokes. This experience ignited a passion within me to code and create more of those gratifying "Ah-hah" moments, not only for myself but also for the teams I collaborate with.',
        'One of my most significant accomplishments in the technology domain was achieving victory as part of a team that clinched "The Best Performance Award" at the highly competitive World Education Robot competition, triumphing over 5000 competing teams. This prestigious robotics contest not only elevated my programming and problem-solving skills to new heights but also honed my abilities in effective communication and leadership.',
        'The invaluable experience gained from the robotics competition reinforced my resolve to pursue a degree in Software Engineering at RMIT University. A standout aspect of my personality is my innate capacity to swiftly grasp new skills and programming languages, which has proven instrumental in my academic and professional pursuits. My unwavering dedication to learning and my penchant for creating technological marvels drive me to continuously push the boundaries of my capabilities in the dynamic world of science and technology.',
    ];

    return (
        <div id="about" className="px-15">
            <Title title="About Me" />
            <div className="px-12 flex flex-row mt-5">
                <div className="px-5 mt-5 pe-10">
                    {paragraphs.map((para, index) => {
                        return <AboutMePara key={index}>{para}</AboutMePara>;
                    })}
                </div>
                <div className="m-5">
                    <img src="https://jainam-doshi-public.s3.ap-southeast-2.amazonaws.com/Jainam+photo.jpeg" alt="Jainam Doshi" className="rounded-xl" />
                </div>
            </div>
            <div className="py-5 px-16 pt-[6rem]">
                <TabNav>
                    <Tab title="Experience">Experience Body</Tab>
                    <Tab title="Education">Education Body</Tab>
                    <Tab title="Awards & Certifications">Awards & Certifications</Tab>
                </TabNav>
            </div>
        </div>
    );
}

type AboutMeParaProps = {
    children?: ReactNode;
};

const AboutMePara: FC<AboutMeParaProps> = (props) => {
    return <p className="pb-5 font-light text-grey text-md text-justify">{props.children}</p>;
};
