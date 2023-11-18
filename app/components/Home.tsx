import Occupation from "./Occupation";

export default function Home() {
    return (
        <div id="home">
            <div className="bg-code bg-right bg-no-repeat">
                <div className="text-left py-56 px-12 space-y-5">
                    <span className="text-[rgb(198,201,216)] uppercase text-3xl tracking-wide font-semibold">
                        Welcome to my World
                    </span>
                    <h1 className="text-7xl font-normal">
                        Hi, I'm
                        <span className="font-semibold"> Jainam Doshi</span>
                        <br />
                    </h1>
                    <Occupation />
                    <h2 className="font-semibold font-normal text-2xl">
                        based in Melbourne, Australia.
                    </h2>
                </div>
            </div>
        </div>
    );
}