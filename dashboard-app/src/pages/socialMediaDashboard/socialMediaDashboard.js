import "./socialMediaDashboard.css"
import { themeContext } from "../../context"
import { useContext, useState ,useEffect} from "react"
import SocialMediaCard from "../../components/smediacard/smediacard"
import OverviewCard from "../../components/overviewcard/overviewcard"
export default function SocialMediaDashboard() {
    const { theme, setTheme } = useContext(themeContext)
    const [ socialMediaAccounts, setSocialMediaAccounts] = useState([])
   
    useEffect(() => {
        setSocialMediaAccounts([
            {
                socialMediaName:"facebook",
                logo:"",
                followersNum:1987,
                followersToday:12,
                stateFollowersToday:"inc",
                likesNum:52,
                likessToday:2,
                stateLikesToday:"dec",
                accountName:"nathanf",
                borderColor:["hsl(208, 92%, 53%)",],
                numViews:87,
                viewsToday:3,
                stateViewsToday:"inc",
            },
            {
                socialMediaName:"twitter",
                logo:"",
                followersNum:1044,
                followersToday:99,
                stateFollowersToday:"inc",
                likesNum:52,
                likessToday:2,
                stateLikesToday:"dec",
                accountName:"nathanf",
                borderColor:[" hsl(203, 89%, 53%)",],
                numViews:87,
                viewsToday:3,
                stateViewsToday:"inc",
            }
            ,
            {
                socialMediaName:"instagram",
                logo:"",
                followersNum:"11k",
                followersToday:1099,
                stateFollowersToday:"inc",
                likesNum:52,
                likessToday:2,
                stateLikesToday:"dec",
                accountName:"realnathanf",
                borderColor:["hsl(37, 97%, 70%)","hsl(329, 70%, 58%)"],
                numViews:87,
                viewsToday:3,
                stateViewsToday:"inc",
            }
            ,
            {
                socialMediaName:"youtube",
                logo:"",
                followersNum:8239,
                followersToday:144,
                stateFollowersToday:"dec",
                likesNum:52,
                likessToday:2,
                stateLikesToday:"dec",
                accountName:"Nathan F.",
                borderColor:["hsl(348, 97%, 39%)",],
                numViews:87,
                viewsToday:3,
                stateViewsToday:"inc",
            }, 
        ])
      },[])


    return (
        <div className={`pageContainer ${theme==="dark"? 'dark':""}` }>
            <div className="container">
                <div className="row  p-3">
                    <div className="header">
                        <div className="titleContainer">
                        <h1 className="title darkFont"> social media dashboard</h1>
                        <p className="subTitle ">total followers: </p>
                        <hr className="hr" />
                        </div>
                        <div className="themeContainer ">
                            <label className="me-3 mode">{`${theme} Mode`}</label>
                            <input type="checkbox" className="checkbox" id="chk" />
                            <label className="label mx-2" htmlFor="chk">
                                <div className="ball" onClick={()=>{theme === "light"?setTheme("dark"):theme ==="dark" && setTheme("light")}}></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center p-3">
                        {socialMediaAccounts.map((acc,index)=>{
                            return(
                                <SocialMediaCard key={acc.socialMediaName} {...acc}/>
                            )

                        })}   
                </div>
                <div className="row justify-content-center p-3">
                <h2 className="secondTitle">overview - today</h2>

                        {socialMediaAccounts.map((acc,index)=>{
                            return(
                                <OverviewCard key={acc.socialMediaName} {...acc}/>
                            )

                        })}   
                </div>
            </div>


        </div>

    )
}