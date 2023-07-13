export interface BlogPostSection {
    heading?: string,
    body: string,
}

export interface BlogPost {
    title: string,
    slug: string,
    author: string,
    date_created: Date,
    type: string,
    state: string,
    socials_image: string,
    summary: string,
    sections: BlogPostSection[],
}
