import {BlogPost} from "../../types/blogPost";
import Section from "./section";
import {toAgoTime} from "../../utils/timeUtils";
import Link from "next/link";
import Capsule from "../uiLibrary/capsule";
import Dict = NodeJS.Dict;

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


const Post = (props: BlogPost) => {
    const {title, author, date_created, slug, type, sections} = props;

    return (
        <>
            <article
                className={'mx-auto w-full px-10 py-10 mb-8 format format-sm sm:format-base lg:format-lg format-invert bg-gray-900 bg-opacity-75'}>
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
            </article>
        </>
    )
}

export default Post;
