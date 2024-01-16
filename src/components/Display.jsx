import PropTypes from 'prop-types'


function Display ({personal, profile, education, work, skills, contact}) {

    return (
        <>
            <div className='cvDisplay'>
                <div id="cvPaper" className="parent">
                    <div className="div1">
                        <div>
                            <h1>{personal[0].text} <span>{personal[1].text}</span></h1>
                        </div>
                        <div className="title"><h2>{personal[2].text}</h2></div>
                    </div>
                    <div className="div2">
                        <div>
                            <h2>PROFILE</h2>
                            <p>{profile[0].text}</p>
                        </div>
                        <div>
                            <h2>CONTACT</h2>
                            <div><p>{contact[2].text}</p></div>
                            <div><p>{contact[1].text}</p></div>
                            <div><p>{contact[0].text}</p></div>
                        </div>
                        <div>
                            <h2>EDUCATIONAL</h2>
                            {education.map(edu => {
                                return (
                                    <div key={edu.id}>
                                        <h3>{edu.degree}</h3>
                                        <p>{edu.school} <br />{edu.start} - {edu.stop}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <h2>SKILLS</h2>
                            <div>
                                <ul>
                                    <div>
                                        {skills.map(skill => {
                                            return (
                                                <li key={skill.id}>{skill.skill}</li>
                                            )
                                        })}
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="div3">
                        <div>
                            <h2>WORK EXPERIENCE</h2>
                            <div id="wr">
                                {work.map(wrk => {
                                    return (
                                        <div key={wrk.id} className="wrkExp">
                                            <div className="companyName">
                                                <h3>{wrk.position}</h3>
                                                <h3>{wrk.start} - {wrk.stop}</h3>
                                            </div>
                                            <div>
                                                <p className="faint">{wrk.company}</p>
                                                <div className="resp">
                                                    <p>
                                                        {wrk.responsibility}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

Display.propTypes = {
    personal: PropTypes.array,
    profile: PropTypes.array,
    contact: PropTypes.array,
    work: PropTypes.array,
    education: PropTypes.array,
    skills: PropTypes.array
}

export default Display