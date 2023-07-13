import StyledLink from "./uiLibrary/styledLink";
import ExternalLink from "./uiLibrary/externalLink";

const playerWiki = 'https://wiki.unitystation.org'
const devWiki = 'https://unitystation.github.io/unitystation/'

const Navigation = () => {
    return (
        <nav className="flex flex-col sm:flex-row items-center justify-around max-w-3xl p-4 mx-auto">
            <ul className="flex flex-col sm:flex-row items-center text-sm font-medium text-gray-500 space-x-2 sm:space-x-4">
                <li className="mb-2 sm:mb-0">
                    <StyledLink href="/" className="px-3 py-2 rounded-lg"> Home </StyledLink>
                </li>

                <li className="mb-2 sm:mb-0">
                    <StyledLink href="/blog" className="px-3 py-2 rounded-lg">Blog</StyledLink>
                </li>

                <li className="mb-2 sm:mb-0">
                    <StyledLink href="/changelog" className="px-3 py-2 rounded-lg">Changelog</StyledLink>
                </li>

                <li className="mb-2 sm:mb-0">
                    <ExternalLink href={playerWiki} text="Player's Wiki" />
                </li>
                <li className="mb-2 sm:mb-0">
                    <ExternalLink href={devWiki} text="Developer's Wiki" />
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
