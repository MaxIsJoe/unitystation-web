import classNames from "classnames";
interface CapsuleProps {
    text: string
    colour: string
}

export default function Capsule(props: CapsuleProps) {
    const {text, colour} = props;
    const classes = classNames(
        'inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none  rounded',
        {
            'text-indigo-100 bg-indigo-600': colour === 'indigo',
            'text-green-100 bg-green-600': colour === 'green',
            'text-blue-100 bg-blue-600': colour === 'blue',
        });

    return (
        <span className={classes}>
            {text}
        </span>
    )
}