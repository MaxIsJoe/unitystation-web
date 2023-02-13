import {NextPage} from 'next';
import ChangelogResultsPage from '../components/changelog/changelogResultsPage';
import {AllChangesResponse} from '../types/allChangesResponse';
import {useEffect, useState} from 'react';
import Head from "next/head";
import Container from "../components/uiLibrary/container";
import PageHeading from "../components/uiLibrary/PageHeading";



const initialResponse: AllChangesResponse = {
    count: 0,
    next: null,
    previous: null,
    results: []
}


const Changelog: NextPage = () => {
    const [changelog, setChangelog] = useState<AllChangesResponse>(initialResponse);
    const [url, setUrl] = useState<string | null>('https://changelog.unitystation.org/all-changes?limit=3');

    useEffect(() => {
        if (url == null) return;
        window.scrollTo(0, 0)
        fetch(url).
            then(response => response.json()).
            then((data: AllChangesResponse) => {
                setChangelog(data);
                console.log(data);
        })
    }, [url]);

    const handleNextClicked = () => {
        console.log('next clicked');
        setUrl(changelog.next);
    }

    const handlePrevClicked = () => {
        console.log('prev clicked');
        setUrl(changelog.previous);
    }

    return (
        <>
            <Head>
                <title key="title">Unitystation - Changelog</title>
                <meta
                    key="description"
                    name="description"
                    content="Find all the changes we have pushed to Unitystation here!"/>
                <meta key="og:title" property="og:title" content="Unitystation - Changelog"/>
                <meta
                    key="og:description"
                    property="og:description"
                    content="Find all the changes we have pushed to Unitystation here!"/>
                <meta key="og:url" property="og:url" content="https://unitystation.org/changelog"/>
            </Head>
            <Container>
                <PageHeading isCentered>Changelog</PageHeading>

                <ChangelogResultsPage
                    count={changelog.count}
                    next={changelog.next}
                    previous={changelog.previous}
                    results={changelog.results}
                    handleNextClicked={handleNextClicked}
                    handlePrevClicked={handlePrevClicked}/>
            </Container>
        </>
    )
}

export default Changelog;
