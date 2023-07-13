import {BlogPostSection} from "../../../types/blogPost";

const handleOembed = (heading: string, body: string): string => {
    const pattern = /<oembed url="https?:\/\/(?:www.youtube.com\/watch\?v=|youtu.be\/)([\w-]+)"><\/oembed>/g;
    const iframeReplacement = (match: string, videoId: string): string => {
            return `
                    <div class="video-wrapper">
                        <iframe src="https://www.youtube.com/embed/${videoId}" 
                                title="${heading}"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </div>
    `;
    }

    return body.replace(pattern, iframeReplacement);
}


const Section = (props: BlogPostSection) => {
    const {heading, body} = props;

    return (
        <section className={'mt-8'}>
            {heading && <h2 className={'mb-4 text-2xl text-center font-bold leading-tight lg:mb-6 text-white'}>{heading}</h2>}
            <div className="ck-content" dangerouslySetInnerHTML={{__html: handleOembed(heading ?? "", body)}}/>
        </section>
    )
}

export default Section;