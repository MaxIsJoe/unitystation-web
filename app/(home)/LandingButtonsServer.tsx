import Button from "../common/uiLibrary/button";
import {DISCORD_INVITE_URL, GITHUB_URL, PATREON_URL} from "../../utils/urlContants";



const LandingButtonsServer = () => {
    return (
        <div className={'flex flex-col lg:flex-row justify-center mt-8 gap-4'}>
            <Button className="shadow-2xl" filled={false} text={'Github'} linkTo={GITHUB_URL}/>
            <Button className="shadow-2xl" filled={false} text={'Discord'} linkTo={DISCORD_INVITE_URL}/>
            <Button className="shadow-2xl" filled={false} text={'Patreon'} linkTo={PATREON_URL}/>
        </div>
    )
}

export default LandingButtonsServer;