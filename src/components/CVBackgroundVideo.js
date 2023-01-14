import backgroundVideo from "../images/circuit_1080.mp4";

function CVBackgroundVideo() {
    return (<video autoPlay muted loop id="backgroundvideo">
        <source src={backgroundVideo} type="video/mp4"/>
    </video>);
}

export default CVBackgroundVideo