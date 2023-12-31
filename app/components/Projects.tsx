import Link from 'next/link';
import Title from './Misc';
import Image from 'next/image';

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
        <div id="projects" className="px-15 bg-black pb-4">
            <Title title="Projects" />
            <div className="flex flow-row justify-around my-10 px-16 flex-wrap">
                {props.projects.map((project) => {
                    return (
                        <div key={project.title} className="w-[20rem] my-3 mx-2">
                            <div key={project.title} className="group bg-pink-red rounded-2xl overflow-hidden h-[15rem] relative">
                                <Image src={project.coverImage} alt={project.title} className="h-full w-full" width={0} height={0} />
                                <h3 className="absolute bottom-0 text-white font-extrabold text-lg p-3 w-full text-center text-shadow-black">{project.title}</h3>
                                <div className="absolute top-0 left-0 w-full h-full bg-pink-red flex flex-col items-center scale-0 group-hover:scale-100 justify-between py-5 px-3">
                                    <h4 className="text-white font-extrabold text-2xl text-center">{project.subTitle}</h4>
                                    <p className="text-white font-light text-md text-center">{project.description}</p>
                                    <Link
                                        href={`${project.url}`}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="hover:bg-white hover:text-pink-red font-semibold px-5 py-2 rounded-lg text-white border-2 border-white duration-200"
                                    >
                                        View Project
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap items-center px-2 mt-2 w-full">
                                {project.tags?.map((tag) => {
                                    return (
                                        <span
                                            key={tag}
                                            className="bg-transparent text-pink-red-light text-sm font-light px-2 py-1 rounded-lg mr-2 border border-pink-red-light my-1"
                                        >
                                            {tag}
                                        </span>
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
