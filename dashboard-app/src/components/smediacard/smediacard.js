import "./smediacard.css"
import twitter from "../twitter-custom.svg"
import facebook from "../facebook-square.svg"
import youtube from "../logo-youtube.svg"
import instagram from "../Instagram-Glyph-Color-Logo.wine.svg"
export default function SocialMediaCard(props) {

    return (
        <div className="col-lg-2 col-md-6 col-sm-10  m-4 smCard p-3" style={props.borderColor.length > 1 ? { borderTopStyle: "solid", borderTopWidth: "5px", borderImage: `linear-gradient(to right,${props.borderColor[0]},${props.borderColor[1]}) 1` } : { borderTop: `5px solid ${props.borderColor}` }}>
            <div className="accountName">
                {
                    props.socialMediaName === "twitter"?
                    <img src={twitter}></img>
                    :props.socialMediaName === "facebook"?
                    <img src={facebook}></img>
                    : props.socialMediaName === "youtube"?
                    <img src={youtube}></img>
                    :props.socialMediaName === "instagram" &&
                    <img src={instagram}></img>

                }
               
                <span className="mx-2">@{props.accountName}</span>
            </div>
            <h1 className="followersNum my-0">{props.followersNum}</h1>
            <p className="followers mt-0">{props.socialMediaName === "youtube" ? "SUBSCRIBERS" : 'FOLLOWERS'}</p>
            <div>
                {
                    props.stateFollowersToday === "inc" ?
                        <i className="fas fa-caret-up followersToday" style={{ color: "hsl(163, 72%, 41%)" }} ></i>
                        :
                        <i className="fas fa-caret-down followersToday" style={{ color: "hsl(356, 69%, 56%)" }} ></i>
                }
                <span className="followersToday ms-1" style={props.stateFollowersToday === "inc" ? { color: "hsl(163, 72%, 41%)" } : props.stateFollowersToday === "dec" ? { color: "hsl(356, 69%, 56%)" } : {}}>{props.followersToday} Today</span>
            </div>

        </div>
    )
}