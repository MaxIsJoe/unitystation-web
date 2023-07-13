import LayoutChildren from "../../../types/layoutChildren";


export default function Container(props: LayoutChildren) {
    const { children } = props;

    return (
        <main className="container pt-8 pb-16 lg:pt-16 lg:pb-24" >
            {children}
        </main>
    );
}