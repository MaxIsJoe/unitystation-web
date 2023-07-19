'use client';
import './clown.css';
import useWindowSize from "../../hooks/useWindowSize";
import React, {RefObject, useEffect, useState} from "react";

const MS_PER_FRAME = 30;
const CLOWN_SIZE = 64;

const Clown = () => {
    const size = useWindowSize();
    const [x, setX] = useState(-CLOWN_SIZE);
    const [y, setY] = useState(-CLOWN_SIZE);
    const [dirX, setDirX] = useState(1);
    const [dirY, setDirY] = useState(1);
    const [timesClicked, setTimesClicked] = useState(0);
    const audioRef: RefObject<HTMLAudioElement> = React.createRef();

    const handleClick = () => {
        audioRef.current!.play();
        setTimesClicked(timesClicked + 1);
    }

    const renderTimesClicked = () => {
        const tooManyClick = () => {
            if (timesClicked > 499) {
                return <p>Ok, You killed the clown. I hope you are happy now.</p>
            }
            if (timesClicked > 300) {
                return <p>What are you trying to do? You want to post how many times you clicked the clown and get and
                    get a medal or something?</p>
            }
            if (timesClicked > 200) {
                return <p>Seriously?</p>
            }
            if (timesClicked > 100) {
                return <p>Don&apos;t you have anything better to do?</p>
            }
            if (timesClicked > 50) {
                return <p>Erm, aren&apos;t you getting bored?</p>
            }
            if (timesClicked > 20) {
                return <p>Haha, clicking the clown is so funny!</p>
            }
        }

        if (timesClicked > 5) {
            return (
                <div className="timesClicked">
                    <p>Times you have clicked the clown: {timesClicked}</p>
                    {tooManyClick()}
                </div>
            );
        }
    }

    const renderClown = () => {
        if (timesClicked < 500) {
            return (
                <picture>
                    <img className={"clown-img z-20"}
                         onClick={handleClick}
                         src="/clown/clown.png"
                         alt="me"
                         height={CLOWN_SIZE}
                         width={CLOWN_SIZE}
                         style={{position: 'absolute', left: x, top: y}}
                    />
                </picture>
            );
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (x + dirX > size.width + CLOWN_SIZE / 4 || x + dirX < (-CLOWN_SIZE * 2)) {
                setDirX(prevDx => -prevDx);
            }

            if (y + dirY > size.height + CLOWN_SIZE / 4 || y + dirY < (-CLOWN_SIZE * 2)) {
                setDirY(prevDy => -prevDy);
            }

            setX(prevX => prevX + dirX);
            setY(prevY => prevY + dirY);
        }, MS_PER_FRAME);

        return () => clearInterval(interval);
    });

    return (
        <div>
            {renderTimesClicked()}
            <audio ref={audioRef} src={"/clown/bikehorn.ogg"}></audio>
            {renderClown()}
        </div>
    )
};

export default Clown;