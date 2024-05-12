import { FC, ReactNode } from 'react';
import Title from './Misc';
import { Tab, TabNav } from './Tab';
import { TimeLine, TimeLineItem } from './Timeline';
import Image from 'next/image';

export default function About() {
	const paragraphs = [
		'With an enthusiasm for science and technology that has been ingrained in me since childhood, I have always been drawn to the thrill of solving problems and reveling in those "Ah-hah" moments when faced with challenges.',
		'My journey into the world of programming began during my middle school years, where I was introduced to the fascinating realm of making a computer obey my commands with just a few keystrokes. This experience ignited a passion within me to code and create more of those gratifying "Ah-hah" moments, not only for myself but also for the teams I collaborate with.',
		'One of my most significant accomplishments in the technology domain was achieving victory as part of a team that clinched "The Best Performance Award" at the highly competitive World Education Robot competition, triumphing over 5000 competing teams. This prestigious robotics contest not only elevated my programming and problem-solving skills to new heights but also honed my abilities in effective communication and leadership.',
		'The invaluable experience gained from the robotics competition reinforced my resolve to pursue a degree in Software Engineering at RMIT University. A standout aspect of my personality is my innate capacity to swiftly grasp new skills and programming languages, which has proven instrumental in my academic and professional pursuits. My unwavering dedication to learning and my penchant for creating technological marvels drive me to continuously push the boundaries of my capabilities in the dynamic world of science and technology.'
	];

	return (
		<div id='about-me' className='px-15'>
			<Title title='About Me' />
			<div className='px-12 flex flex-row mt-5'>
				<div className='px-5 mt-5 pe-10'>
					{paragraphs.map((para, index) => {
						return <AboutMePara key={index}>{para}</AboutMePara>;
					})}
				</div>
				<div className='m-5'>
					<Image
						src='https://jainam-doshi-public.s3.ap-southeast-2.amazonaws.com/Jainam+Photo.jpg'
						alt='Jainam Doshi'
						className='rounded-xl'
						width={2500}
						height={7500}
					/>
				</div>
			</div>
			<div className='py-5 px-16 pt-[6rem]'>
				<TabNav>
					<Tab title='Experience'>
						<TimeLine>
							<TimeLineItem
								title='Full-Stack Developer'
								company='Friday Technologies'
								date='Jan 2024 - Mar 2024'
								empType='Internship'
							>
								<p>
									Collaborated on a project focusing on crafting an AI-driven content generation tool
									for SMBs, incorporating tools like a Business Name Generator and Brand Creator to
									elevate brand identity and operational efficiency.
								</p>
								<p>
									Engineered a full-stack application leveraging NextJS and ExpressJS, featuring a
									responsive UI, intuitive UX, and scalable API endpoints.
								</p>
								<p>
									Ensured robust functionality and consistency through testing with Vitest and react
									testing library, while seamlessly integrating Docker for project deployment.
								</p>
							</TimeLineItem>
							<TimeLineItem
								title='IT Developer'
								company='Cadre Capital Partners (CCP)'
								date='Mar 2023 - Nov 2023'
								empType='Part-Time'
							>
								<p>
									Following a year of notable success in my internship at CPP, I was offered and
									accepted a permanent position at CCP. Balancing my professional commitments with
									academic pursuits, I continued to work part-time while completing my studies at
									RMIT.
								</p>
								<p>
									{
										"I contributed to the training and collaboration with new team members, which led to a significant improvement in the business's efficiency and overall effectiveness."
									}
								</p>
							</TimeLineItem>
							<TimeLineItem
								title='IT Developer Intern'
								company='Cadre Capital Partners (CCP)'
								date='Jan 2022 - Dec 2022'
								empType='Full-Time'
							>
								<p>
									Engineered a customized file system within Microsoft SharePoint using JavaScript, to
									automatically organize compliance documents, enhancing retrieval and data governance
									by leveraging document metadata and client information.
								</p>
								<p>
									{
										"Employed advanced web scraping techniques to aggregate data and facilitate its integration with various CRM systems via API connections, optimizing data flow processes and reinforcing the company's data-centric business model."
									}
								</p>
								<p>
									Developed and sustained automated solutions with PowerShell scripting, significantly
									improving workflow for advisors.
								</p>
							</TimeLineItem>
						</TimeLine>
					</Tab>
					<Tab title='Education'>
						<TimeLine>
							<TimeLineItem
								title="Bachelor's of Software Engineering at RMIT"
								company='Melbourne, Australia'
								date='Feb 2020 - Dec 2023'
								empType='GPA 3.8'
							></TimeLineItem>
							<TimeLineItem
								title='Victoria International School of Sharjah'
								company='Sharjah, United Arab Emirates'
								date='2014 - 2019'
								empType='GPA 3.8'
							>
								<p>
									Studied the International Baccalaureate Diploma Programme, a rigorous and
									comprehensive curriculum that emphasizes critical thinking
								</p>
							</TimeLineItem>
						</TimeLine>
					</Tab>
					<Tab title='Awards & Certifications'>
						<TimeLine>
							<TimeLineItem
								title='Certified Cloud Practitioner'
								company='Amazon Web Services'
								date='Nov 2020'
								empType='Certification'
							></TimeLineItem>
							<TimeLineItem
								title='JavaScript Algorithms and Data Structures'
								company='FreeCodeCamp'
								date='Nov 2020'
								empType='Certification'
							></TimeLineItem>
							<TimeLineItem
								title='Java Programming: Arrays, Lists, and Structured Data'
								company='Coursera'
								date='Aug 2019'
								empType='Certification'
							></TimeLineItem>
							<TimeLineItem
								title='Java Programming: Solving Problems with Software'
								company='Coursera'
								date='July 2019'
								empType='Certification'
							></TimeLineItem>
							<TimeLineItem
								title='Mathematical Thinking in Computer Science'
								company='Coursera'
								date='June 2019'
								empType='Certification'
							></TimeLineItem>
							<TimeLineItem
								title='World Education Robot Contest'
								company='Sharjah, United Arab Emirates'
								date='2017 - 2018'
								empType='Award'
							>
								<p>
									Spearheaded team representation for UAE in the international robotics competition in
									Shanghai, engineering a LEGO Mindstorms robot with advanced sensor integration for
									precise line following and task execution
								</p>
								<p>
									{
										'Secured the "The Performance Team" Award for exceptional robot performance and teamwork.'
									}
								</p>
							</TimeLineItem>
						</TimeLine>
					</Tab>
				</TabNav>
			</div>
		</div>
	);
}

type AboutMeParaProps = {
	children?: ReactNode;
};

const AboutMePara: FC<AboutMeParaProps> = (props) => {
	return <p className='pb-5 text-grey text-lg text-justify'>{props.children}</p>;
};
