import { IconType } from 'react-icons';

type CardProps = {
    title: string;
    description: string;
    icons: { icon: IconType; name: string }[];
};

export default function Card(props: CardProps) {
    return (
        <div className="bg-pink-red mx-[10rem] rounded-lg mb-10">
            <div className="flex flex-row ">
                <div className="w-1/4 flex flex-col text-center py-3">
                    <h3 className="text-3xl font-bold pb-2">{props.title}</h3>
                    <p className="text-2xl font-semibold">{props.description}</p>
                </div>
                <div className="w-3/4 bg-white flex items-center justify-center">
                    {props.icons.map((icon) => {
                        return (
                            <div key={icon.name} className="group flex flex-row text-black justify-center items-center h-full">
                                <button data-tooltip-target={`${icon.name}-tooltip`} type="button">
                                    <icon.icon className="w-16 h-16" />
                                </button>

                                <span
                                    id={`${icon.name}-tooltip`}
                                    className="group-hover:scale-100 scale-0 duration-100 hover:animate-scale font-light absolute bg-pink-red text-white h-20 w-20 rounded-lg flex items-center justify-center text-sm"
                                >
                                    {icon.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
