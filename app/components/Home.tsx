import Occupation from './Occupation';

export default function Home() {
	return (
		<div id='home' className='bg-black'>
			<div className='bg-code bg-right bg-no-repeat h-screen w-full flex items-center'>
				<div className='text-left space-y-5 px-12 pt-5'>
					<span className='text-grey uppercase text-3xl tracking-wide font-semibold'>
						Welcome to my World
					</span>
					<h1 className='text-7xl font-normal'>
						{"Hi, I'm"}
						<span className='font-semibold'> Jainam Doshi</span>
						<br />
					</h1>
					<Occupation />
					<h2 className='font-normal text-2xl'>based in Australia.</h2>
				</div>
			</div>
		</div>
	);
}
