import React from "react";
import './ck-content.css';

export default function BlogLayout({children,}: { children: React.ReactNode; }) {
    return (
        <>
            {children}
        </>
    )
}