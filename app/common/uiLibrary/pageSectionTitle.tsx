import React from "react";
import classNames from "classnames";

interface PageSectionTitleProps {
    children: React.ReactNode,
    extraClasses?: string
}

const PageSectionTitle = (props: PageSectionTitleProps) => {
    const {children, extraClasses} = props;

    return (

        <p className={classNames('mb-4 text-3xl text-center font-bold leading-tight lg:mb-6 text-white', extraClasses)}>
            {children}
        </p>
    )
}

export default PageSectionTitle;