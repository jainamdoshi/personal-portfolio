import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';

export default function App() {
    return (
        <div>
            <Header />
            <main className="mt-[-7rem]">
                <Home />
                <About />
            </main>
        </div>
    );
}
