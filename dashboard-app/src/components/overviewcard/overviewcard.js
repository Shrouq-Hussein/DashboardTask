import "./overviewcard.css"
import twitter from "../twitter-custom.svg"
import facebook from "../facebook-square.svg"
import youtube from "../logo-youtube.svg"
import instagram from "../Instagram-Glyph-Color-Logo.wine.svg"
export default function OverviewCard(props) {
    return (
        <>
            <div className="col-lg-2 col-md-6 col-sm-10  m-4 overViewCard p-3">
                <div  >
                    <p className="title" >page views</p>
                    {
                        props.socialMediaName === "twitter" ?
                            <img src={twitter} style={{ height: "25px" }}></img>
                            : props.socialMediaName === "facebook" ?
                                <img src={facebook} style={{ height: "25px" }}></img>
                                : props.socialMediaName === "youtube" ?
                                    <img src={youtube} style={{ height: "25px" }}></img>
                                    : props.socialMediaName === "instagram" &&
                                    <img src={instagram} style={{ height: "25px" }}></img>

                    }
                </div>
                <div>
                    <h2>{props.likesNum}</h2>
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
            </div>
            <div className="col-lg-2 col-md-6 col-sm-10  m-4 overViewCard p-3">
                <div>
                    <p className="title" >likes</p>
                    {
                        props.socialMediaName === "twitter" ?
                            <img src={twitter} style={{ height: "25px" }}></img>
                            : props.socialMediaName === "facebook" ?
                                <img src={facebook} style={{ height: "25px" }}></img>
                                : props.socialMediaName === "youtube" ?
                                    <img src={youtube} style={{ height: "25px" }}></img>
                                    : props.socialMediaName === "instagram" &&
                                    <img src={instagram} style={{ height: "25px" }}></img>

                    }
                </div>
                <div>
                <h2>{props.likesNum}</h2>

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
            </div>
        </>

    )
}