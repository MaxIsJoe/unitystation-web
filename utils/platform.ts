import UAParser from 'ua-parser-js';
import GithubReleaseResponse from '../types/githubReleaseResponse';

function getUserPlatform(): string | undefined {
    const parser = new UAParser();
    const result = parser.getResult();
    const { os } = result;
    console.log(result);
    let minifiedPlatform: string | undefined;

    switch (os.name?.toLowerCase()) {
        case 'mac os':
            minifiedPlatform = 'mac';
            break;
        case 'windows':
            minifiedPlatform = 'win';
            break;
        case 'linux':
        case 'fedora' :
        case 'debian' :
        case 'gentoo' :
        case 'ubuntu' :
        case 'mint':
        case 'pcLinuxos':
        case 'redhat' :
        case 'suse':
        case 'slackware':
        case 'manjaro':
        case 'arch':
            minifiedPlatform = 'lin';
            break;
        default:
            minifiedPlatform = undefined;
            break;
    }

    return minifiedPlatform;
}

async function getDownloadLinkForPlatform(platform: string | undefined): Promise<string> {
    let defaultDownloadLink = 'https://github.com/unitystation/stationhub/releases/latest';

    if (platform === undefined) {
        return defaultDownloadLink;
    }

    return await fetchGithubReleases().then(
        (response: GithubReleaseResponse) => {
            const assets = response.assets;
            const asset = assets.find(asset => asset.name.includes(platform));
            if (asset !== undefined) {
                defaultDownloadLink = asset.browser_download_url;
            }

            return defaultDownloadLink;
        });
}

function fetchGithubReleases(): Promise<GithubReleaseResponse> {
    const githubReleasesApi = 'https://api.github.com/repos/unitystation/stationhub/releases/latest';
    return fetch(githubReleasesApi).then( response => {
        return response.json()
    });
}

function getDownloadLink(): Promise<string> {
    const platform = getUserPlatform();
    return getDownloadLinkForPlatform(platform);
}

export default getDownloadLink;
