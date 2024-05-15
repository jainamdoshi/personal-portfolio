export default function Title(props: { title: string }) {
	return (
		<div className='w-full flex justify-center max-sm:py-10 max-md:py-12 py-14'>
			<h1 className='max-sm:text-5xl max-md:text-6xl text-7xl font-extrabold text-shadow-pink-red'>
				{props.title}
			</h1>
		</div>
	);
}
