import {BlogPost} from "../../../types/blogPost";
import FetchOfType from "../../../utils/fetchOfType";
import React from "react";
import Post from "./post";
import {PageParams} from "../../../types/pageParams";
import {Metadata} from "next";

const fetchPost = async (slug: string): Promise<BlogPost> => {
    return await FetchOfType<BlogPost>(`https://changelog.unitystation.org/posts/${slug}`);
}

export const metadata: Metadata = {

}

const setMetadata = (post: BlogPost) => {
    metadata.title = `Unitystation - ${post.title}`;
    metadata.description = post.summary;
    metadata.openGraph = {
        type: 'website',
        locale: 'en_US',
        url: `https://unitystation.org/blog/${post.slug}`,
        title: `Unitystation - ${post.title}`,
        description: post.summary,
        images: [
            {
                url: post.socials_image
            }
            ]
    }
}

const PostPage = async (query: PageParams) => {

    const {slug} = query.params;
    const post: BlogPost = await fetchPost(slug as string);
    setMetadata(post);

    return (
        <>
            <main className={'pt-8 pb-16 lg:pt-16 lg:pb-24'}>
                <div className={'flex px-4 mx-auto max-w-screen-xl '}>
                    {<Post post={post}/>}
                </div>
            </main>
        </>
    )
}

export default PostPage;