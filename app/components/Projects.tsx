import Link from 'next/link';
import Title from './Misc';

export type ProjectProps = {
    title: string;
    subTitle: string;
    description: string;
    coverImage: string;
    url: string;
};

export default function Projects(props: { projects: ProjectProps[] }) {
    return (
        <div id="projects" className="px-15">
            <Title title="Projects" />
            <div className="flex flow-row justify-around my-10 px-16">
                {props.projects.map((project) => {
                    return (
                        <div key={project.title} className="group bg-pink-red rounded-2xl overflow-hidden h-[15rem] w-[25rem] relative hover:animate-scale">
                            <img src={project.coverImage} alt={project.title} className="h-full w-full" />
                            <h3 className="absolute bottom-0 text-white font-extrabold text-lg p-3 w-full text-center">{project.title}</h3>
                            <div className="absolute top-0 left-0 w-full h-full bg-pink-red flex flex-col items-center scale-0 group-hover:scale-100 justify-between py-5 px-3">
                                <h4 className="text-white font-extrabold text-3xl text-center">{project.subTitle}</h4>
                                <p className="text-white font-normal text-md text-center">{project.description}</p>
                                <Link
                                    href={`${project.url}`}
                                    rel="noopener noreferrer"
                                    target='_blank'
                                    className="hover:bg-white hover:text-pink-red font-semibold px-5 py-2 rounded-lg text-white border-2"
                                >
                                    View Project
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}