import '../styles/globals.css'
import '../styles/ck-content.css'
import type {AppProps} from 'next/app'
import Background from '../components/background';
import Navigation from '../components/navigation';
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/clown.css'
import Clown from "../components/clown/clown";
import Head from "next/head";
import {defaultMeta} from "../utils/defaultMeta";

config.autoAddCss = false

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title key='title'>{defaultMeta.title}</title>
                <meta charSet="UTF-8"/>
                <meta name="keywords" content={defaultMeta.keywords}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta key='description' name="description" content={defaultMeta.description}/>
                <meta key='og:title' property="og:title" content={defaultMeta.title}/>
                <meta key='og:description' property="og:description" content={defaultMeta.description}/>
                <meta key='og:image' property="og:image" content={defaultMeta.image}/>
                <meta key="og:url" property="og:url" content={defaultMeta.url} />
                <meta key="og:type" property="og:type" content="website"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content={defaultMeta.domain}/>
                <meta property="twitter:url" content={defaultMeta.url}/>
                <meta name="twitter:title" content={defaultMeta.title}/>
                <meta name="twitter:description" content={defaultMeta.description}/>
                <meta name="twitter:image" content={defaultMeta.image}/>
            </Head>
            <Background>
                <Clown></Clown>
                    <Navigation/>
                    <Component {...pageProps} />
            </Background>
        </>
    )
}

export default MyApp
