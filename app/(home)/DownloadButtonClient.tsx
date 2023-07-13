'use client';
import Button from "../common/uiLibrary/button";
import {useEffect, useState} from "react";
import getDownloadLink from "../../utils/platform";
import {GITHUB_RELEASES_URL} from "../../utils/urlContants";
import {BiSolidDownload} from "react-icons/bi";



const DownloadButtonClient = () => {
    const [downloadLink, setDownloadLink] = useState(GITHUB_RELEASES_URL);

    useEffect(() => {
        getDownloadLink().then((link) => setDownloadLink(link));
    }, []);

    return (
        <div className={'flex flex-wrap justify-center mt-8 gap-4'}>
            <Button filled={true} text={'Download'} linkTo={downloadLink} iconRight={BiSolidDownload} />
        </div>
    )
}

export default DownloadButtonClient;