import Link from "next/link";
import Dict = NodeJS.Dict;
import {BlogPost} from "../../../types/blogPost";
import Panel from "../../common/uiLibrary/panel";
import {toAgoTime} from "../../../utils/timeUtils";
import Capsule from "../../common/uiLibrary/capsule";
import Section from "./section";

const colourByType: Dict<string> = {
    'announcement': 'blue',
    'weekly': 'indigo',
    'community': 'green',
}

const textByType: Dict<string> = {
    'announcement': 'Announcement',
    'weekly': 'Weekly Update',
    'community': 'Community Highlight',
}

type PostProps = {
    post: BlogPost;
}

const Post = ({ post }: PostProps) => {
    const {title, author, date_created, slug, type, sections} = post;

    return (
        <>
            <Panel>
                <header className={'mb-4 lg:mb-6 not-format'}>
                    <div className={'flex justify-between mb-6 not-italic'}>
                        <div className="inline-flex items-center mr-3 text-sm text-white">
                            <div>
                                <Link href={`/blog/${slug}`}>
                                    <h1 className="mb-4 text-4xl text-center font-extrabold leading-tight lg:mb-6 text-white hover:underline hover:cursor-pointer">
                                        {title}
                                    </h1>
                                </Link>
                                <p className="text-xl font-bold text-white">by {author}</p>
                                <p className="text-base font-light text-gray-500 dark:text-gray-400">
                                    <time dateTime={date_created?.toString()} title={date_created?.toString()}>
                                        {toAgoTime(date_created)}
                                    </time>
                                </p>
                            </div>
                        </div>
                        <div className="inline-flex items-center">
                            <Capsule text={textByType[type]!} colour={colourByType[type]!} />
                        </div>
                    </div>
                </header>
                <div className={'flex flex-col'}>
                    {!!sections && sections.map((section, index) => {
                        return (
                            <Section
                                key={index}
                                heading={section.heading}
                                body={section.body}
                            />
                        )
                    })
                    }
                </div>
            </Panel>
        </>
    )
}

export default Post;