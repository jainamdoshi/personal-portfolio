export default function Title(props: { title: string }) {
    return (
        <div className="w-full flex justify-center py-14">
            <h1 className="text-7xl font-extrabold text-shadow-pink-red">{props.title}</h1>
        </div>
    );
}