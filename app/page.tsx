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
        tags: ['TypeScript', 'NextJS', 'TailwindCSS', 'AWS S3', 'AWS Route 53'],
    },
    {
        title: 'Pacman Game AI',
        subTitle: 'Artificial Intelligence',
        description: 'Applying various AI techniques such as search, reinforcement learning, and bayesian networks to the game of Pacman',
        coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntz4baDJfyK1oIlc7bTqisO6JcE4OWtdCkQ&usqp=CAU',
        url: 'https://github.com/jainamdoshi/pacman-AI.git',
        tags: ['Python', 'Artificial Intelligence', 'Search', 'Multi-Agent', 'Reinforcement Learning', 'Bayesian Networks'],
    },
    {
        title: 'Qwirkle Game',
        subTitle: 'Command Line Interface',
        description: 'A board game called Qwirkle which allows users to play against each other or against a computer',
        coverImage: 'https://shop.goodgames.com.au/cdn/shop/products/qwirkle2.jpg?v=1603688244',
        url: 'https://github.com/jainamdoshi/qwirkle.git',
        tags: ['C++', 'Object-Oriented Programming', 'Algorithms', 'Data Structures'],
    },
    {
        title: 'Path Solver',
        subTitle: 'Object-Oriented Programming',
        description: 'A program which finds the shortest path between two points in a maze',
        coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAiJnd952Uj94hWQ98coDhuWzhwUi7Qdsl0ezSLQDQ0XcKh5UWvLgo-X3MYn2_VUQzxE4&usqp=CAU',
        url: 'https://github.com/jainamdoshi/path-solver.git',
        tags: ['C++', 'Object-Oriented Programming', 'Algorithms', 'Data Structures'],
    },
    {
        title: 'Online Clothes Store',
        subTitle: 'Web Development',
        description: 'An online clothes store which allows users to browse and purchase clothes',
        coverImage: 'https://img.freepik.com/premium-vector/clothes-accessories-with-laptop_24877-75697.jpg',
        url: 'https://github.com/jainamdoshi/RAD_s3821245_s3825891.git',
        tags: ['Ruby', 'Rails', 'Bootstrap', 'PostgreSQL', 'Heroku'],
    },
    {
        title: 'Online Book Store',
        subTitle: 'Web Development',
        description: 'An online book store which allows users to browse and purchase books',
        coverImage: 'https://edsurge.imgix.net/uploads/post/image/14497/bookstore-1637792757.png?auto=compress%2Cformat&w=640&h=259&fit=crop',
        url: 'https://github.com/jainamdoshi/book-store.git',
        tags: ['Java', 'SpringBoot', 'Maven', 'JavaScript', 'ReactJS', 'MySQL', 'AWS Elastic Beanstalk', 'CI/CD', 'Docker'],
    },
    {
        title: 'Blackjack',
        subTitle: 'Java Application',
        description: 'A Java application which allows users to play a simplified version of Blackjack against a computer',
        coverImage:
            'https://media.istockphoto.com/vectors/vector-realistic-isolated-neon-sign-for-blackjack-cards-for-and-on-vector-id880696130?k=6&m=880696130&s=612x612&w=0&h=ssrWQx5eIDYeUkY3010fOGjwVgDwzJF8CSvD1t_fFM8=',
        url: 'https://github.com/jainamdoshi/Simplified-Blackjack-Game.git',
        tags: ['Java', 'Object-Oriented Programming', 'AWT/Swing'],
    },
    {
        title: 'Multi-threading Problems',
        subTitle: 'Operating Systems',
        description: 'A program which simulates the Producer-Consumer and Sleeping Barber multi-threading problems',
        coverImage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--vCb1OCTR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.imgur.com/RbelQBq.png',
        url: 'https://github.com/jainamdoshi/OSP-A1.git',
        tags: ['C', 'System calls', 'Multi-threading', 'Operating Systems'],
    },
    {
        title: 'Internet Protocol with MicroBits',
        subTitle: 'Internet of Things',
        description: 'A project which uses MicroBits to simulate the various Internet Protocol',
        coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qZ3IOASa-CdXKO892g_H-f-DDlpjvgiDrOjVLHfvGFATOsRbBha-oKlpC9M6jEY2mjU&usqp=CAU',
        url: 'https://github.com/jainamdoshi/Internet-Protocols-with-microBits.git',
        tags: ['MicroBit', 'Python', 'TCP/IP', 'UDP', 'Error Detection', 'Networks'],
    },
    {
        title: 'Predicting crimes with regression',
        subTitle: 'Analytics',
        description: 'A data analysis project which uses regression to predict the number of crimes',
        coverImage: 'https://www.wheelhousedmg.com/wp-content/uploads/2021/01/GA4LOGO-01.png',
        url: 'https://github.com/jainamdoshi/Multiple-Linear-Regression-Analytics-Project.git',
        tags: ['Python', 'Jupyter', 'Data Analysis'],
    },
    {
        title: 'Fitness App Prototype',
        subTitle: 'Mobile App Design',
        description: 'A mobile app prototype for a fitness app which allows users to track their fitness and health goals',
        coverImage: 'https://miro.medium.com/max/1200/1*nCSlqmXKgU4TD937KyEFwQ.jpeg',
        url: 'https://www.figma.com/proto/fxgnZFbELEe0AFVeLkGypn/UCD-FINAL-PROTOTYPE',
        tags: ['Figma', 'User-Centered Design', 'Prototyping', 'Wireframes'],
    },
];

    return (
        <div className='w-full'>
            <Header />
            <main className="mt-[-7rem]">
                <Home />
                <Skills />
                <Projects projects={projects} />
                <About />
            </main>
        </div>
    );
}
