'use client';


import {useEffect, useState} from "react";

const texts = [
    'Join our Discord server to get involved!',
    'Yeah, we have some bugs but at least they are funny!',
    'We are not dead yet!',
    'Surviving the curse one PR at a time!',
    'I\'m not a web developer, please send help!',
    'Thank you patreons for keeping the lights on!',
    'Check our Github if you want to contribute!',
    'Devlog might release any time now!',
    '[object Object]',
    'Join us every Saturday on our community playtest! (More info on Discord)',
]

const RandomThirdTextClient = () => {

    const [randomText, setRandomText] = useState(texts[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomText(texts[Math.floor(Math.random() * texts.length)]);
        }, 5000);
        return () => clearInterval(interval);
    })

    return (
        <p className={'mx-auto mt-4 font-extralight'}>
            {randomText}
        </p>
    )
}

export default RandomThirdTextClient;