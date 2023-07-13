interface EmojiProps {
    symbol: string;
    label?: string;
}

const Emoji = (props: EmojiProps) => {
    const { label, symbol } = props;

    return (
        <span
            className={"emoji"}
            role={"img"}
            aria-label={label ? label : ""}
            aria-hidden={label ? "false" : "true"}
        >
            {symbol}
        </span>
    )
}

export default Emoji
