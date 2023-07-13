import Change from "../../types/change";
import {IconType} from "react-icons";
import classNames from "classnames";
import {FaArrowUp, FaCirclePlus} from "react-icons/fa6";
import {FaBalanceScale, FaQuestion, FaWrench} from "react-icons/fa";

const determineIcon = (category: string): IconType => {
    switch (category) {
        case "NEW":
            return FaCirclePlus;
        case "FIX":
            return FaWrench;
        case "IMPROVEMENT":
            return FaArrowUp;
        case 'BALANCE':
            return FaBalanceScale;
        default:
            return FaQuestion;
    }
}

const determineColour = (category: string): string => {
    switch (category) {
        case 'NEW':
            return 'text-green-500';
        case 'FIX':
            return 'text-orange-600';
        case 'IMPROVEMENT':
            return 'text-blue-600';
        case 'BALANCE':
            return 'yellow-200';
        default:
            return 'text-white';
    }
}

interface ChangeProps {
    change: Change
}

const ChangeComponent = (props: ChangeProps) => {
    const {author_username, author_url, description, pr_url, pr_number, category} = props.change;
    const Icon = determineIcon(category);
    const colourClass = determineColour(category);

    return (
        <li className={'py-3 sm:py-4'}>
            <div className={'flex items-center space-x-4'}>
                <div className={'shrink-0'}>
                    <Icon className={classNames("text-xl", colourClass)}/>
                </div>
                <div className={'min-w-0 flex-1'}>
                    <p className={'text-sm font-medium text-white-900'}>
                        {description}
                    </p>
                    <p className="text-sm text-gray-400">
                        contributed by <a href={author_url} className={'text-gray-400 hover:text-gray-500 hover:underline'}>{author_username} </a>
                        in <a href={pr_url} className={'text-blue-500 hover:text-purple-500 hover:underline'}>PR
                        #{pr_number}</a>
                    </p>
                </div>
            </div>
        </li>
    )
}

export default ChangeComponent;