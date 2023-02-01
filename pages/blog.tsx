import {NextPage} from "next";
import {useEffect, useState} from "react";
import Post from "../components/blog/post";
import {BlogPostsResponse} from "../types/blogPostsResponse";
import Head from "next/head";



const Blog: NextPage = () => {
    const [posts, setPosts] = useState({} as BlogPostsResponse);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://changelog.unitystation.org/posts`)
            .then(response => response.json())
            .then(json => setPosts(json))
            .then(() => setLoading(false))
    }, [currentPage]);

    return (
        <>
            <Head>
                <title key={'title'}>Unitystation - Blog</title>
                <meta
                    key='description'
                    name='description'
                    content='The Unitystation Blog is a place where we post about the development of Unitystation, our community, and other things related to the game!'
                />
                <meta
                    key='og:title'
                    property='og:title'
                    content='Unitystation - Blog'
                />
                <meta
                    key='og:description'
                    property='og:description'
                    content='The Unitystation Blog is a place where we post about the development of Unitystation, our community, and other things related to the game!'
                />
            </Head>
            <main className={'pt-8 pb-16 lg:pt-16 lg:pb-24'}>
                <div className={'flex px-4 mx-auto max-w-screen-xl '}>
                    {!loading && <div>
                    {posts.results.map((post) => {
                        return (
                            <Post
                                key={post.slug}
                                title={post.title}
                                date_created={post.date_created}
                                slug={post.slug}
                                sections={post.sections}
                                author={post.author}
                                state={post.state}
                                type={post.type}
                                socials_image={post.socials_image}
                                summary={post.summary}/>
                        )
                    })}
                </div>}
                </div>
            </main>
        </>
    )
}

export default Blog;
