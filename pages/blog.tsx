import {NextPage} from "next";
import {useCallback, useEffect, useRef, useState} from "react";
import Post from "../components/blog/post";
import {BlogPostsResponse} from "../types/blogPostsResponse";
import Head from "next/head";
import Container from "../components/uiLibrary/container";
import {BlogPost} from "../types/blogPost";
import Spinner from "../components/uiLibrary/spinner";


const Blog: NextPage = () => {
    const [postsResponse, setPostsResponse] = useState<BlogPostsResponse>();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const INITIAL_PAGE = "https://changelog.unitystation.org/posts/?page=1";

    const fetchPosts = async (url: string) : Promise<BlogPostsResponse> => {
        setLoading(true);
        const response = await fetch(url);
        return await response.json();
    };

    useEffect(() => {
        fetchPosts(INITIAL_PAGE)
            .then(json => {
                setPostsResponse(json);
                setPosts(json.results);
            })
            .finally(() => setLoading(false));
    }, []);

    const handleScroll = useCallback(async () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !postsResponse?.next) return;
        setLoading(true);

        const json = await fetchPosts(postsResponse.next);

        setPosts((prevPosts) => [...prevPosts, ...json.results]);
        setPostsResponse(json);

        setLoading(false);
    }, [postsResponse]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

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
                <ul id="posts">
                    {posts &&
                        posts.map((post) => {
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
                            );
                        })}
                </ul>
                {loading && <Spinner/>}
            </Container>
        </>
    )
}

export default Blog;
