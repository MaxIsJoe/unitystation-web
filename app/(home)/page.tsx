import LandingText from "./landingText";
import {BlogPost} from "../../types/blogPost";
import {BlogPostsResponse} from "../../types/blogPostsResponse";
import FetchOfType from "../../utils/fetchOfType";
import PageSection from "../common/uiLibrary/pageSection";
import LandingButtonsServer from "./LandingButtonsServer";
import DownloadButtonClient from "./DownloadButtonClient";
import LatestNews from "./latestNews";
import ContactInformation from "./contactInformation";
import FeaturesList, {FeatureData} from "./featuresList";
import React from "react";
import {RiGamepadLine, RiRefreshLine, RiRocket2Line, RiTeamLine} from "react-icons/ri";
import HeroRandomImageClient from "./HeroRandomImageClient";

const mainText = "Welcome to Unitystation!";
const secondaryText = "Free and open-source remake of the cult classic Space Station 13, made in Unity Engine.";

const features: FeatureData[] = [
    {
        title: "Player-driven gameplay",
        description: "Every round plays out differently. Almost anything on the station can be picked up, examined or vandalized",
        icon: RiGamepadLine,
        imageUrl: "https://unitystationfile.b-cdn.net/CommunityStuff/1/chicken.png"
    },
    {
        title: "Slapstick Simulation",
        description: "Fly a shuttle into the station, breaching the hull and venting everyone into space.",
        icon: RiRocket2Line,
        imageUrl: "https://unitystationfile.b-cdn.net/CommunityStuff/1/production.gif"
    },
    {
        title: "Dozens of jobs",
        description: "Want to play a cook? A janitor? Law enforcement? Or maybe the captain? Even lawyers have a place on the outpost.",
        icon: RiTeamLine,
        imageUrl: "https://unitystationfile.b-cdn.net/WeeklyBlogUpdates/8/60.png"
    },
    {
        title: "Finally Remade",
        description: "No more dealing with BYOND to play your favorite spessman game.",
        icon: RiRefreshLine,
        imageUrl: "https://unitystationfile.b-cdn.net/WeeklyBlogUpdates/1/25.png"
    }
]

const fetchLatestBlogPost = async (): Promise<BlogPost[]> => {
    const revalidateConfig = {next: {revalidate: 60}};
    const resPage1 = await FetchOfType<BlogPostsResponse>('https://changelog.unitystation.org/posts/', revalidateConfig);
    const resPage2 = await FetchOfType<BlogPostsResponse>('https://changelog.unitystation.org/posts/?page=2', revalidateConfig);
    return resPage1.results.concat(resPage2.results);
}


const HomePage: () => Promise<JSX.Element> = async () => {

    const latestBlogPosts: BlogPost[] = await fetchLatestBlogPost();

    return (
        <>
            <PageSection className="gap-16">
                <HeroRandomImageClient>
                    <LandingText mainText={mainText} secondaryText={secondaryText}/>
                    <DownloadButtonClient/>
                    <LandingButtonsServer/>
                </HeroRandomImageClient>
                <FeaturesList features={features}/>
            </PageSection>
            <PageSection verticalCenter={false}>
                <LatestNews posts={latestBlogPosts}/>
            </PageSection>
            <ContactInformation/>
        </>
    )
}

export default HomePage;