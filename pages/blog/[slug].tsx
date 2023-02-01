import {NextPage} from "next";
import Post from "../../components/blog/post";
import React, {useEffect, useState} from "react";
import {BlogPost} from "../../types/blogPost";
import {useRouter} from 'next/router';
import Head from "next/head";

const trimSummary = (summary: string): string => {
    if (!summary) return '';
    const appendToEnd = '...';
    const maxLength = 165;
    const trimmed = summary.substring(0, maxLength - appendToEnd.length);
    return trimmed + appendToEnd;
}

const PostPage: NextPage<{title: string, socials_image: string, summary: string}> = (props) => {
    const router = useRouter();
    const {slug} = router.query;
    const [post, setPost] = useState({} as BlogPost);

    useEffect(() => {
        if (!router.isReady) return;
        fetch(`https://changelog.unitystation.org/posts/${slug}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, [router.isReady]);

    return (
        <>
            <Head>
                <title key={'title'}>Unitystation - {props.title}</title>
                <meta
                    key='description'
                    name='description'
                    content={trimSummary(props.summary)}
                />
                <meta
                    key='og:title'
                    property='og:title'
                    content={`Unitystation - ${props.title}`}
                />
                <meta
                    key='og:description'
                    property='og:description'
                    content={trimSummary(props.summary)}
                />
                <meta
                    key='og:image'
                    property='og:image'
                    content={props.socials_image}
                />
            </Head>

            <main className={'pt-8 pb-16 lg:pt-16 lg:pb-24'}>
                <div className={'flex px-4 mx-auto max-w-screen-xl '}>
                    {<Post
                        key={post.slug}
                        title={post.title}
                        date_created={post.date_created}
                        slug={post.slug}
                        sections={post.sections}
                        author={post.author}
                        state={post.state}
                        type={post.type}
                        socials_image={post.socials_image}
                        summary={post.summary}/>}
                </div>
            </main>
        </>
    )
}

export default PostPage;

async function getServerSideProps(context: any) {
    const {slug} = context.query;
    const res = await fetch(`https://changelog.unitystation.org/posts/${slug}`);
    const post = await res.json();
    const { title, socials_image, summary } = post;
    return {
        props: {
            title,
            socials_image,
            summary
        }
    }
}