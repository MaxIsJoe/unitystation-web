import Button from "../common/uiLibrary/button";
import {DISCORD_INVITE_URL, GITHUB_URL, PATREON_URL} from "../../utils/urlContants";



const LandingButtonsServer = () => {
    return (
        <div className={'flex flex-wrap justify-center mt-8 gap-4'}>
            <Button filled={false} text={'Github'} linkTo={GITHUB_URL}/>
            <Button filled={false} text={'Discord'} linkTo={DISCORD_INVITE_URL}/>
            <Button filled={false} text={'Patreon'} linkTo={PATREON_URL}/>
        </div>
    )
}

export default LandingButtonsServer;