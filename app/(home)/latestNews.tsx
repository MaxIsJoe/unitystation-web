import {BlogPost} from "../../types/blogPost";
import classNames from "classnames";
import Container from "../common/uiLibrary/container";
import {toAgoTime} from "../../utils/timeUtils";
import PageSectionTitle from "../common/uiLibrary/pageSectionTitle";

interface NewsCardProps {
    post: BlogPost,
    isMain?: boolean,
    className?: string
}

interface LatestNewsProps {
    posts: BlogPost[]
}

const NewsCard = (props: NewsCardProps) => {
    const {title, summary, socials_image, date_created, slug} = props.post;
    const {className: classes} = props;
    const isMain = props.isMain ?? false;

    const style = {
        backgroundImage: `url(${socials_image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
        backgroundPosition: 'center',
    }

    const truncateSummary = (summary: string, isMain: boolean) => {
        if (isMain) {
            return summary;
        }

        return summary.slice(0, 175) + '...';
    }

    return (
            <a href={`/blog/${slug}`} className={classNames('relative overflow-hidden', classes)}>
                <div className="absolute inset-0 rounded-lg shadow-lg bg-gray-400" style={style}></div>
                <div className="relative p-3 h-full flex flex-col justify-between">
                    <div>
                        <div
                            className={
                            classNames('text-2xl text-white leading-tight border-b hover:border-dashed hover:border-gray-500',
                                {'lg:text-5xl': isMain})}>{title}</div>
                        <div className="text-normal text-gray-300">
                            <span className=" pb-1">{toAgoTime(date_created)}</span>
                        </div>
                    </div>
                    <p className="">{truncateSummary(summary, isMain)}</p>
                </div>
            </a>
    )
}

const LatestNews = (props: LatestNewsProps) => {
    const {posts} = props;

    return (
        <>
            <PageSectionTitle>Latest News</PageSectionTitle>
            <Container>
                <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <NewsCard post={posts[0]} isMain className="h-full" />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        {posts.slice(1).map((post, index) => (
                            <NewsCard key={index} post={post} className="h-auto flex-grow" />
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default LatestNews;
