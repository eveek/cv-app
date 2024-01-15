import PropTypes from 'prop-types'

function Skills (props) {
    const {skills, onChange, addSkill, removeSkill} = props

    return (
        <>
        <fieldset id="skill">
                            <legend>Skills</legend>
                            {skills.map((skill, index) => {

                                return (
                                    <div key={index}>
                                        <div className="skillFlex">
                                            <input autoComplete="off" onChange={onChange} type="text" name="skill" id={skill.id} value={skill.skill} placeholder="Skill"/>
                                            {
                                                index ? <div className="remove"><button onClick={(e) => removeSkill(e, index)}>&times;</button></div> : ""
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                            {
                                skills.length < 6 ?  <button onClick={addSkill} className="add">+ Add More Skill</button> : ''
                            }
                        </fieldset>
        </>
    )
}

Skills.propTypes = {
    skills: PropTypes.array,
    onChange: PropTypes.func,
    addSkill: PropTypes.func,
    removeSkill: PropTypes.func
}

export default Skills