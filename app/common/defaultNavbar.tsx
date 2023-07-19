'use client';

import {Navbar} from 'flowbite-react';
import React from "react";
import {GoLinkExternal} from "react-icons/go";

const playerWiki = 'https://wiki.unitystation.org'
const devWiki = 'https://unitystation.github.io/unitystation/'

export default function DefaultNavbar() {
    return (
        <Navbar fluid rounded className="dark:bg-gray-900">
            <Navbar.Brand/>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link href="/">
                    <p>Home</p>
                </Navbar.Link>
                <Navbar.Link href="/blog">
                    <p>Blog</p>
                </Navbar.Link>
                <Navbar.Link href="/changelog">
                    <p>Changelog</p>
                </Navbar.Link>
                <Navbar.Link href={playerWiki} target="_blank">
                    <div className="flex flex-row gap-1">
                        <p>Player&apos;s wiki</p>
                        <GoLinkExternal/>
                    </div>
                </Navbar.Link>
                <Navbar.Link href={devWiki} target="_blank">
                    <div className="flex flex-row gap-1">
                        <p>Dev&apos;s wiki</p>
                        <GoLinkExternal/>
                    </div>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


