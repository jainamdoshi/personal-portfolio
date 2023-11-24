'use client';

import { Children, ReactNode, isValidElement, useState } from 'react';

type TabNavProps = {
    children?: ReactNode;
};

export function TabNav(props: TabNavProps) {
    const children = props.children as ReactNode[];
    const tabs: {type: any, title: string, body: ReactNode}[] = Children.map(children, (child: any, index) => {
        return {
            type: child.type,
            title: child.props.title,
            body: child.props.children,
        };
    });

    const [activeTab, setActiveTab] = useState(tabs[0].title);

    return (
        <div className="px-20">
            <div className="flex flex-row justify-between">
                {tabs.map((tab) => {
                    return (
                        <div key={tab.title} className="px-5 py-2">
                            <button
                                onClick={() => setActiveTab(tab.title)}
                                className="font-extrabold uppercase text-2xl flex flex-col hover:scale-110 hover:text-pink-red duration-500"
                            >
                                {tab.title}
                                <span className={`bg-pink-red h-1 mt-3 ${activeTab == tab.title ? 'w-full' : 'w-1/4'} duration-700`}></span>
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="mt-10 py-5">
                {tabs.map((tab) => {
                    return (
                        <tab.type key={tab.title} title={tab.title} hidden={activeTab != tab.title}>
                            {tab.body}
                        </tab.type>
                    );
                })}
            </div>
        </div>
    );
}

type TabProps = {
    children?: ReactNode;
    title: string;
    hidden?: boolean;
};

export function Tab(props: TabProps) {
    return <div className={`ml-6 ${props.hidden ? 'hidden' : ''}`}>{props.children}</div>;
}