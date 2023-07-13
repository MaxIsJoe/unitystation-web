import React from "react";
import Panel from "../common/uiLibrary/panel";

const BlogLoading = () => {
    return (
        <main className={'pt-8 pb-16 lg:pt-16 lg:pb-24'}>
            <div className={'flex px-4 mx-auto max-w-screen-xl '}>
                <Panel>
                    <div className="animate-pulse space-y-4">
                        <div className="h-10 bg-gray-400 rounded w-3/4"></div>
                        <div className="h-6 bg-gray-400 rounded w-1/4"></div>
                        <div className="h-4 bg-gray-400 rounded w-1/4"></div>
                        <div className="h-4 bg-gray-400 rounded w-1/4"></div>
                        <div className="h-64 bg-gray-400 rounded"></div> {/* Placeholder for image */}
                        <div className="space-y-2"> {/* Additional lines of text */}
                            <div className="h-4 bg-gray-400 rounded w-4/5"></div>
                            <div className="h-4 bg-gray-400 rounded w-3/5"></div>
                            <div className="h-4 bg-gray-400 rounded w-2/5"></div>
                            <div className="h-4 bg-gray-400 rounded w-3/5"></div>
                            <div className="h-4 bg-gray-400 rounded w-4/5"></div>
                            <div className="h-4 bg-gray-400 rounded w-3/5"></div>
                            <div className="h-4 bg-gray-400 rounded w-2/5"></div>
                            <div className="h-4 bg-gray-400 rounded w-3/5"></div>
                        </div>
                    </div>
                </Panel>
            </div>
        </main>
    );
}

export default BlogLoading;
