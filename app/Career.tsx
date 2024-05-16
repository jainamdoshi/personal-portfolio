'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ReactNode, useState } from 'react';
import { TimeLine, TimeLineItem } from '../components/ui/Timeline';

type Tab = {
	title: string;
	body: ReactNode;
};

// const tabs: Tab[] = ['Experience', 'Education', 'Awards & Certifications'];
const tabs: Tab[] = [
	{
		title: 'Experience',
		body: (
			<TimeLine>
				<TimeLineItem
					title='Full-Stack Developer'
					company='Friday Technologies'
					date='Jan 2024 - Mar 2024'
					empType='SummerTech Live Internship'
				>
					<p>
						Collaborated on a project focusing on crafting an AI-driven content generation tool for SMBs,
						incorporating tools like a Business Name Generator and Brand Creator to elevate brand identity
						and operational efficiency.
					</p>
					<p>
						Engineered a full-stack application leveraging NextJS and ExpressJS, featuring a responsive UI,
						intuitive UX, and scalable API endpoints.
					</p>
					<p>
						Ensured robust functionality and consistency through testing with Vitest and react testing
						library, while seamlessly integrating Docker for project deployment.
					</p>
				</TimeLineItem>
				<TimeLineItem
					title='IT Developer'
					company='Cadre Capital Partners (CCP)'
					date='Mar 2023 - Nov 2023'
					empType='Part-Time'
				>
					<p>
						Following a year of notable success in my internship at CPP, I was offered and accepted a
						permanent position at CCP. Balancing my professional commitments with academic pursuits, I
						continued to work part-time while completing my studies at RMIT.
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
						automatically organize compliance documents, enhancing retrieval and data governance by
						leveraging document metadata and client information.
					</p>
					<p>
						{
							"Employed advanced web scraping techniques to aggregate data and facilitate its integration with various CRM systems via API connections, optimizing data flow processes and reinforcing the company's data-centric business model."
						}
					</p>
					<p>
						Developed and sustained automated solutions with PowerShell scripting, significantly improving
						workflow for advisors.
					</p>
				</TimeLineItem>
			</TimeLine>
		)
	},
	{
		title: 'Education',
		body: (
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
						Studied the International Baccalaureate Diploma Programme, a rigorous and comprehensive
						curriculum that emphasizes critical thinking
					</p>
				</TimeLineItem>
			</TimeLine>
		)
	},
	{
		title: 'Awards & Certifications',
		body: (
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
						Spearheaded team representation for UAE in the international robotics competition in Shanghai,
						engineering a LEGO Mindstorms robot with advanced sensor integration for precise line following
						and task execution
					</p>
					<p>{'Secured the "The Performance Team" Award for exceptional robot performance and teamwork.'}</p>
				</TimeLineItem>
			</TimeLine>
		)
	}
];

export default function Career() {
	const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

	return (
		<Tabs defaultValue={activeTab.title} className='w-full'>
			<TabsList className='w-full justify-between bg-transparent h-auto flex-wrap'>
				{tabs.map((tab) => {
					return (
						<TabsTrigger
							key={tab.title}
							value={tab.title}
							onClick={() => setActiveTab(tab)}
							className='flex-col items-start px-2 font-extrabold uppercase max-sm:text-md max-md:text-lg text-2xl hover:scale-110 hover:text-pink-red duration-500 hover:data-[state=active]:text-pink-red'
						>
							{tab.title}
							<span
								className={`bg-pink-red h-1 mt-3 ${activeTab == tab ? 'w-full' : 'w-1/4'} duration-700`}
							></span>
						</TabsTrigger>
					);
				})}
			</TabsList>
			{tabs.map((tab) => {
				return (
					<TabsContent key={tab.title} value={tab.title} className='mt-10 px-2'>
						{tab.body}
					</TabsContent>
				);
			})}
		</Tabs>
	);
}
