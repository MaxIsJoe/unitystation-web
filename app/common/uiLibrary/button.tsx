import {IconType} from "react-icons";
import classNames from "classnames";

type ButtonProps = {
    filled: boolean,
    text: string,
    linkTo: string,
    iconLeft?: IconType,
    iconRight?: IconType,
    className?: string
}

const Button = (props: ButtonProps) => {
    const {filled, text, linkTo, iconLeft: IconLeft, iconRight: IconRight} = props;
    const filledClass = 'bg-gray-800 border-2 border-transparent text-white text-md mr-4 hover:bg-gray-900';
    const outlineClass = 'bg-gray-800 bg-opacity-30 border-2 border-gray-800 text-white text-md hover:bg-gray-800';
    const classes = classNames(
        'uppercase py-2 px-4 flex justify-center items-center',
        filled ? filledClass : outlineClass,
        props.className
    )

    return (
            <a
                href={linkTo}
                className={classes}>
                {IconLeft && <IconLeft className="mr-3 w-7 h-7" />}
                <div>
                    {text}
                </div>
                {IconRight && <IconRight className="ml-3 w-7 h-7" />}
            </a>
    )
};

export default Button;
