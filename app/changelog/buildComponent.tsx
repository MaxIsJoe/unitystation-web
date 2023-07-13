import Build from "../../types/build";
import Change from "../../types/change";
import ChangeComponent from "./changeComponent";
import React from "react";
import Panel from "../common/uiLibrary/panel";

function populateChangeList(changes: Change[]) {
    let changesList;

    if (changes?.length > 0) {
        changesList = changes.map((change: Change, index: number) => {
            return (
                <ChangeComponent
                    key={index}
                    change={change}
                />

            )
        });
    } else {
        changesList =
            <li className={'py-3 sm:py-4'}>
                <div className={'flex items-center space-x-4'}>
                    <div className={'flex-1 min-w-fit'}>
                        <p className={'text-center text-gray-500'}>This build has no registered changes :(</p>
                    </div>
                </div>
            </li>
    }

    return changesList;
}

interface BuildProps {
    build: Build
}

const BuildComponent = (props: BuildProps) => {
    const {version_number, date_created, changes} = props.build;
    const changesList = populateChangeList(changes);

    return (
        <Panel>
            <div className={'flex justify-between'}>
                <h5 className="lg:text-xl font-bold leading-none text-white">
                    Build: {version_number}
                </h5>
                <h5 className="lg:text-xl font-bold leading-none text-white">
                    Date: {date_created}
                </h5>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-700">
                    {changesList}
                </ul>
            </div>
        </Panel>
    )
}

export default BuildComponent;