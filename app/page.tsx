import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects, { ProjectProps } from './components/Projects';

export default function App() {

const projects: ProjectProps[] = [
    {
        title: 'Personal Portfolio',
        subTitle: 'Web Development',
        description: 'A personal portfolio webpage which showcases my education, skills, achievements, certifications, and projects',
        coverImage: 'https://jainam-doshi-public.s3.ap-southeast-2.amazonaws.com/personal-portfolio-coverimage.png',
        url: 'https://github.com/jainamdoshi/personal-portfolio.git',
    },
];

    return (
        <div className='w-full'>
            <Header />
            <main className="mt-[-7rem]">
                <Home />
                <About />
                <Skills />
                <Projects projects={projects} />
            </main>
        </div>
    );
}
