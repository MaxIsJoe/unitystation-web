'use client';

import {Navbar} from 'flowbite-react';
const playerWiki = 'https://wiki.unitystation.org'
const devWiki = 'https://unitystation.github.io/unitystation/'

export default function DefaultNavbar() {
    return (
        <Navbar fluid rounded className="dark:bg-gray-900">
            <Navbar.Brand/>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link active href="/">
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="/blog">
                    Blog
                </Navbar.Link>
                <Navbar.Link href="/changelog">
                    Changelog
                </Navbar.Link>
                <Navbar.Link href={playerWiki}>
                    Player&apos;s wiki
                </Navbar.Link>
                <Navbar.Link href={devWiki}>
                    Dev&apos;s wiki
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


