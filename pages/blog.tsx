import {NextPage} from "next";
import {useEffect, useState} from "react";
import Post from "../components/blog/post";
import {BlogPostsResponse} from "../types/blogPostsResponse";
import Head from "next/head";
import Container from "../components/uiLibrary/container";


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
            <Container>
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
                                />
                            )
                        })}
                    </div>}
            </Container>
        </>
    )
}

export default Blog;
