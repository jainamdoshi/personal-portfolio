'use client';

import { Children, ReactNode } from 'react';

type TimeLineProps = {
	children?: ReactNode;
};

export function TimeLine(props: TimeLineProps) {
	const children = props.children as ReactNode[] | ReactNode;

	type Item = {
		type: any;
		title: string;
		company: string;
		date: string;
		body: ReactNode;
		empType: string;
	};

	const items: Item[] = [];

	if (Array.isArray(children)) {
		children.forEach((child: any) => {
			items.push({
				type: child.type,
				title: child.props.title,
				company: child.props.company,
				date: child.props.date,
				body: child.props.children,
				empType: child.props.empType
			});
		});
	} else {
		const child = children as any;
		items.push({
			type: child.type,
			title: child.props.title,
			company: child.props.company,
			date: child.props.date,
			body: child.props.children,
			empType: child.props.empType
		});
	}

	return (
		<div>
			<ol className='relative border-s border-gray-700'>
				{items.map((item) => {
					return (
						<li key={item.title} className='mb-10 ms-6'>
							<span className='absolute flex items-center justify-center max-sm:h-5 max-md:h-5 max-sm:w-5 max-md:w-5 w-7 h-7 rounded-full max-sm:-start-[0.67rem] max-md:-start-[0.72rem] -start-[0.9rem] bg-pink-red mt-1'></span>
							<item.type
								title={item.title}
								company={item.company}
								date={item.date}
								empType={item.empType}
							>
								{item.body}
							</item.type>
						</li>
					);
				})}
			</ol>
		</div>
	);
}

type TimeLineItemProps = {
	children?: ReactNode;
	title: string;
	company: string;
	date: string;
	empType: string;
};

export function TimeLineItem(props: TimeLineItemProps) {
	return (
		<div className='w-full'>
			<h3 className='flex items-center mb-1 max-sm:text-md max-md:text-lg text-2xl text-white'>
				<span className='font-semibold'>{props.title}</span>
				<span className='whitespace-pre'> - </span>
				<span className='font-light max-sm:text-xs max-md:text-md text-lg'>{props.company}</span>
			</h3>
			<time className='block my-2 text-sm font-normal text-gray-500 uppercase'>
				{props.date} <span className='me-2 text-pink-red-light ml-3'>{props.empType}</span>
			</time>
			<div className='mb-4 text-base font-normal text-gray-400'>
				{Children.map(props.children, (child: any) => {
					return <child.type className={child.props.className + ' mb-2'}>{child.props.children}</child.type>;
				})}
			</div>
		</div>
	);
}
