import contact_github_icon from "../images/icons/logo_github_icon_143196.png"
import contact_gmail_icon from "../images/icons/gmailoffline_94931.png"
import contact_linkedin_icon from "../images/icons/logo_linkedin_icon_143191.png"
import contact_twitter_icon from "../images/icons/logo_twitter_bird_icon_143203.png"
function CVContactIcon(props) {
    return <a href={props.link}>
        <img className="icons" src={props.src} alt={"Jonathan Schoreels"}/>
    </a>
}

function CVContact() {
    return (
        <>
            <CVContactIcon link={"https://github.com/jschoreels"} src={contact_github_icon}/>
            <CVContactIcon link={"mailto:jonathan.schoreels@jisko.be"} src={contact_gmail_icon}/>
            <CVContactIcon link={"https://www.linkedin.com/in/jonathanschoreels/"} src={contact_linkedin_icon}/>
            <CVContactIcon link={"https://twitter.com/JSchoreels"} src={contact_twitter_icon}/>
        </>
    );
}

export default CVContact