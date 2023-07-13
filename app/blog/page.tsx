'use client';

import React, {useCallback, useEffect, useState} from "react";
import {BlogPostsResponse} from "../../types/blogPostsResponse";
import {BlogPost} from "../../types/blogPost";
import Post from "./[slug]/post";
import BlogLoading from "./loading";

const fetchPosts = async (url: string): Promise<BlogPostsResponse> => {
    const response = await fetch(url);
    return await response.json();
}

const BlogPage = () => {
    const [postsResponse, setPostsResponse] = useState<BlogPostsResponse>();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const INITIAL_PAGE = "https://changelog.unitystation.org/posts/?page=1";

    useEffect(() => {
        fetchPosts(INITIAL_PAGE).then((response) => {
            setIsLoading(true);
            setPostsResponse(response);
            setPosts(response.results);
        }).finally(
            () => setIsLoading(false)
        )
    }, []);

    const handleScroll = useCallback(async () => {
        if (isLoading) return;
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !postsResponse?.next) return;
        setIsLoading(true);
        const json = await fetchPosts(postsResponse.next);

        setPosts((prevPosts) => [...prevPosts, ...json.results]);
        setPostsResponse(json);
        setIsLoading(false);
    }, [postsResponse]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <main className={' flex flex-col pt-8 pb-16 lg:pt-16 lg:pb-24'}>
            {!!posts && posts.map((post, index) => {
                return <div key={index} className={'flex px-4 mx-auto max-w-screen-xl '}>
                    <Post key={index} post={post}/>
                </div>
            })}
            {isLoading && <BlogLoading/>}
        </main>
    )
}

export default BlogPage