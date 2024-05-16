import Link from 'next/link';
import Title from '../components/ui/Misc';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export type ProjectProps = {
	title: string;
	subTitle: string;
	description: string;
	coverImage: string;
	url: string;
	tags?: string[];
};

export default function Projects(props: { projects: ProjectProps[] }) {
	return (
		<div id='projects' className='px-15 pb-4 bg-[#131313]'>
			<Title title='Projects' />
			<div className='flex flow-row justify-around my-10 max-sm:my-6 max-md:my-8 px-16 flex-wrap'>
				{props.projects.map((project) => {
					return (
						<div key={project.title} className='w-[20rem] my-3 mx-2'>
							<Card className='group bg-pink-red rounded-2xl overflow-hidden h-[15rem] relative border-0'>
								<CardContent className='w-full h-full p-0'>
									<Image
										src={project.coverImage}
										alt={project.title}
										className='object-fill h-full w-full'
										width={0}
										height={0}
									/>

									<h3 className='absolute bottom-0 text-white font-extrabold text-lg p-3 w-full text-center text-shadow-black'>
										{project.title}
									</h3>

									<div className='absolute top-0 left-0 w-full h-full bg-pink-red flex flex-col items-center scale-0 group-hover:scale-100 justify-between py-5 px-3'>
										<h4 className='text-white font-extrabold text-2xl text-center'>
											{project.subTitle}
										</h4>
										<p className='text-white font-light text-md text-center'>
											{project.description}
										</p>
										<Link
											href={`${project.url}`}
											rel='noopener noreferrer'
											target='_blank'
											className='hover:bg-white hover:text-pink-red font-semibold px-5 py-2 rounded-lg text-white border-2 border-white duration-200'
										>
											View Project
										</Link>
									</div>
								</CardContent>
							</Card>
							<div className='flex flex-row flex-wrap items-center px-2 mt-2 w-full'>
								{project.tags?.map((tag) => {
									return (
										<Badge
											key={tag}
											variant='outline'
											className='text-pink-red-light border-pink-red-light mr-2 my-1 rounded-lg'
										>
											{tag}
										</Badge>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
