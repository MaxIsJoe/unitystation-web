import PageSection from "./common/uiLibrary/pageSection";
import Panel from "./common/uiLibrary/panel";

const NotFound = () => {
    return (
        <PageSection>
            <Panel>
                <div className="flex flex-col justify-between">
                    <h1 className="text-white text-center text-2xl mb-2">
                        404 | Page Not Found
                    </h1>
                    <p className="text-white text-center text-lg">
                        The page you are looking for does not exist or something is terribly wrong with the website.
                    </p>
                </div>
            </Panel>
        </PageSection>
    );
}

export default NotFound;