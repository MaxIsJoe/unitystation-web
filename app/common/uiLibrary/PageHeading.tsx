import classNames from "classnames";
import LayoutChildren from "../../../types/layoutChildren";

interface PageHeadingProps extends LayoutChildren{
    isCentered?: boolean;
    isLink?: boolean;
}

export default function PageHeading(props: PageHeadingProps) {
    const { children, isCentered, isLink } = props;
    const className = classNames(
        "mb-4 text-4xl font-extrabold leading-tight lg:mb-6 text-white",
        {
            "hover:underline hover:cursor-pointer": isLink,
            "text-center": isCentered,
        });

    return (
        <h1 className={className}>
            {children}
        </h1>
    );
}