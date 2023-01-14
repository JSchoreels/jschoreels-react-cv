import CVProfilePicture from "../components/CVProfilePicture";
import CVSummary from "../components/CVSummary";
import CVContact from "../components/CVContact"
import CVAllSkills from "../components/CVAllSkills";
import * as PropTypes from "prop-types";

function CVTitle(props) {
    return <h1>{props.title}</h1>;
}

CVTitle.propTypes = {title: PropTypes.string};

function CVSection(props) {
    return (<>
        <h2>{props.title}</h2>
        {props.children}
    </>);
}

CVSection.propTypes = {children: PropTypes.any};

export default CV
function CV() {
    return (<div className="cv">
        <CVTitle title="Jonathan Schoreels"/>
        <CVProfilePicture/>
        <CVSection title="About me">
            <CVSummary/>
        </CVSection>
        <CVSection title="Skills">
            <CVAllSkills/>
        </CVSection>
        <CVSection title="Contact">
            <CVContact/>
        </CVSection>
    </div>);
}