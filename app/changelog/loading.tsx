import React from "react";
import Panel from "../common/uiLibrary/panel";
import {IconType} from "react-icons";
import classNames from "classnames";
import {FaQuestion} from "react-icons/fa";

const ChangePlaceholderComponent = () => {
    const Icon: IconType = FaQuestion;
    const colourClass: string = 'text-gray-500';

    return (
        <li className={'py-3 sm:py-4 animate-pulse'}>
            <div className={'flex items-center space-x-4'}>
                <div className={'shrink-0'}>
                    <Icon className={classNames("text-xl", colourClass)}/>
                </div>
                <div className={'min-w-0 flex-1'}>
                    <div className={'text-sm font-medium text-white-900 bg-gray-500 h-4 mb-2'}>
                    </div>
                    <div className="text-sm text-gray-400 bg-gray-500 h-4 w-3/4">
                    </div>
                </div>
            </div>
        </li>
    )
}


function LoadingBuild() {
    let placeholderList = [];

    for(let i=0; i<5; i++) {
        placeholderList.push(
            <ChangePlaceholderComponent key={i}/>
        )
    }

    return (
        <Panel>
            <div className={'flex justify-between'}>
                <h5 className="text-xl font-bold leading-none text-white">
                    <span className="bg-gray-500 h-4 w-24 block animate-pulse"></span>
                </h5>
                <h5 className="text-xl font-bold leading-none text-white">
                    <span className="bg-gray-500 h-4 w-24 block animate-pulse"></span>
                </h5>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-700">
                    {placeholderList}
                </ul>
            </div>
        </Panel>
    )
}

export default LoadingBuild;
