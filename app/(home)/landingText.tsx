import RandomThirdTextClient from "./randomThirdTextClient";

interface LandingTextProps {
    mainText: string
    secondaryText: string
}

const LandingText = (props: LandingTextProps) => {
    const {mainText, secondaryText} = props;

    return (
        <div className={'max-w-3xl mx-auto text-center'}>
            <h1 className={'text-3xl font-extrabold text-white sm:text-5xl'}>
                {mainText}
            </h1>
            <p className="mt-4 sm:leading-relaxed sm:text-xl">
                {secondaryText}
            </p>
            <RandomThirdTextClient />
        </div>)
}

export default LandingText;