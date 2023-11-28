import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Skills from './components/Skills';

export default function App() {
    return (
        <div className='w-full'>
            <Header />
            <main className="mt-[-7rem]">
                <Home />
                <About />
                <Skills />
            </main>
        </div>
    );
}
