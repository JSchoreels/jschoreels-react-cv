function CVAllSkills() {
    return (
        <>
            <CVSkillGroup category={"Programming Paradigm"}>
                <ol>
                    <li><strong>Object-Oriented</strong></li>
                    <li><strong>Functional</strong></li>
                    <li>Procedural</li>
                    <li>Imperative</li>
                </ol>
            </CVSkillGroup>
            <CVSkillGroup category={"Programming Languages"}>
                <ol>
                    <li><strong>Java</strong></li>
                    <li>C</li>
                    <li>Scala</li>
                    <li>Kotlin</li>
                    <li>Javascript</li>
                </ol>
            </CVSkillGroup>
        </>
    )
}

function CVSkillGroup(props) {
    return (
        <>
            <h3>{props.category}</h3>
            {props.children}
        </>
    )
}

export default CVAllSkills