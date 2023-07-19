import "./globals.css";
import React from "react";
import Clown from "./clown/clown";
import {Metadata} from "next";
import DefaultNavbar from "./common/defaultNavbar";

export const metadata: Metadata = {
    title: 'Unitystation - The Space Station 13 Remake Made in Unity',
    keywords: [
        'unitystation',
        'unity',
        'space station 13',
        'ss13',
        'spacestation 13',
        'spacestation13',
        'space station',
        'station',
        'rpg',
        'roleplaying game',
    ],
    description: 'Unitystation is a free and open-source chaotic multiplayer role-playing and simulation game made in Unity. Remake of the cult classic Space Station 13.',
    colorScheme: 'dark',
    authors: {name: 'Unitystation Team', url: 'https://github.com/unitystation'},
    viewport: {width: "device-width", initialScale: 1},
    robots: {follow: true, index: true},
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://unitystation.org/',
        title: 'Unitystation - The Space Station 13 Remake Made in Unity',
        description: 'Unitystation is a free and open-source chaotic multiplayer role-playing and simulation game made in Unity. Remake of the cult classic Space Station 13.',
        images: [
            {
                url: 'https://unitystationfile.b-cdn.net/Branding/US13_OG_image_preview_1.png',
            },
        ]
    }
}

export default function RootLayout({children,}: { children: React.ReactNode; }) {

    return (
        <html>
        <body className="dark">
            <Clown/>
            <DefaultNavbar/>
            {children}
        </body>
        </html>
    )
}

