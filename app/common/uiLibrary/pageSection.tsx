import classNames from "classnames";
import React from "react";

interface PageSectionProps {
    children: React.ReactNode,
    className?: string,
    horizontalCenter?: boolean,
    verticalCenter?: boolean
}

const PageSection = (props: PageSectionProps) => {
    const {children, className, horizontalCenter = true, verticalCenter = true} = props;

    return (
        <div className={
            classNames(
                'min-h-screen min-w-full flex flex-col',
                { 'items-center': horizontalCenter },
                { 'justify-center': verticalCenter },
                className,
            )
        }>
            {children}
        </div>
    )
}

export default PageSection;