import LayoutChildren from "../../types/layoutChildren";
import classNames from "classnames";

interface PanelProps extends LayoutChildren {
    solid?: boolean;
}

export default function Panel(props: PanelProps) {
    const { children, solid } = props;
    const className = classNames(
        "mx-auto w-full px-10 py-10 mb-8 format format-sm sm:format-base lg:format-lg format-invert bg-gray-900",{
            "bg-opacity-75": !solid,
        }
    );

    return (
        <article className={className}>
            {children}
        </article>
    );
}