import React from "react"
import { v4 as uuidv4 } from 'uuid'

const style = {
        marginTop: '20px',
        paddingTop: '20px',
        borderTop: '1px solid  rgb(56, 105, 239)'
    }

let skillCount = 0

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            personal: [
                {
                    name: 'firstname',
                    text: ''
                },
                {
                    name: 'lastname',
                    text: ''
                },
                {
                    name: 'profession',
                    text: ''
                }
            ],
            contact: [
                {
                    name: 'phone',
                    text: ''
                },
                {
                    name: 'email',
                    text: ''
                },
                {
                    name: 'address',
                    text: ''
                },
            ],
            profile:[ {
                    name: 'about',
                    text: ''
                }],
            skills: [
                {
                    id: uuidv4(),
                    skill: ''
                },
                {
                    id: uuidv4(),
                    skill: ''
                }
            ],
            newSkil: {
                id: uuidv4(),
                skill: ''
            },
            education: [
                {
                    id: uuidv4(),
                    school: '',
                    degree: '',
                    start: '',
                    end: ''
                }
            ],
            newEducation: {
                id: uuidv4(),
                school: '',
                degree: '',
                start: '',
                end: ''
            },
            work: [
                {
                    id: uuidv4(),
                    company: '',
                    position: '',
                    responsilility: '',
                    start: '',
                    end: ''
                },
            ],
            newWork: {
                id: uuidv4(),
                company: '',
                position: '',
                responsilility: '',
                start: '',
                end: ''
            }
        }
        this.handlePersonalChange = this.handlePersonalChange.bind(this)
        this.handleEducationChange = this.handleEducationChange.bind(this)
        this.handleWorkChange = this.handleWorkChange.bind(this)
        this.handleProfileChange = this.handleProfileChange.bind(this)
        this.handleContactChange = this.handleContactChange.bind(this)
        this.handleSkillChange = this.handleSkillChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleEducationChange(event) {
        const {name, value, id} = event.target
        const newEdu = this.state.education.map(edu => {
            if (edu.id == id) {
                edu[name] = value
                return edu
            } else {
                return edu
            }
        })
        this.setState({
            ...this.state, education: newEdu
        })
    }

    handleWorkChange(event) {
        const {name, value, id} = event.target
        const newWrk = this.state.work.map(wrk => {
            if (wrk.id == id) {
                wrk[name] = value
                return wrk
            } else {
                return wrk
            }
        })
        this.setState({
            ...this.state, work: newWrk
        })
    }

    handleSkillChange(event) {
        const {name, value, id} = event.target
        const newSkill = this.state.skills.map(skill => {
            if (skill.id == id) {
                skill[name] = value
                return skill
            } else {
                return skill
            }
        })
        this.setState({
            ...this.state, skills: newSkill
        })
    }

    handlePersonalChange(event) {
        const name = event.target.name
        const value = event.target.value
        const newPerson = this.state.personal.map(person => {
            if (person.name == name) {
                person.text = value
                return person
            } else {
                return person
            }
        })
        this.setState({
            ...this.state, personal: newPerson
        })
    }

    handleContactChange(event) {
        const name = event.target.name
        const value = event.target.value
        const newContact = this.state.contact.map(contact => {
            if (contact.name == name) {
                contact.text = value
                return contact
            } else {
                return contact
            }
        })
        this.setState({
            ...this.state, contact: newContact
        })
    }

    handleProfileChange(event) {
        const value = event.target.value
        const name = event.target.name
        const newProfil = this.state.profile.map(profil => {
            if (profil.name == name) {
                profil.text = value
                return profil
            } else {
                return profil
            }
        })
        this.setState({
            ...this.state, profile: newProfil
        }) 

    }


    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <>
                <div className='formBox'>
                <form action="">
                    <div id="formScroll">
                        <fieldset id='personal'>
                        <legend>Personal Information</legend>
                        <div className='half'>
                            <input onChange={this.handlePersonalChange} type="text"  name='firstname' placeholder='Firstname' value={this.state.personal[0].firstname}/>
                            <input onChange={this.handlePersonalChange} type="text"  name='lastname' placeholder='Lastname' value={this.state.personal[1].lastname}/>
                        </div>
                        <div>
                            <input type="text"onChange={this.handlePersonalChange} name="profession" placeholder="Professional Title" value={this.state.personal[2].profession} />
                        </div>
                        </fieldset>
                        <fieldset id="profile">
                            <legend>Profile</legend>
                            <div>
                                <textarea onChange={this.handleProfileChange} name="about" cols="30" rows="10" value={this.state.profile[0].text} placeholder="About yourself"></textarea>
                            </div>
                        </fieldset>
                        <fieldset id='education'>
                        <legend>Education</legend>
                        <div id="eduBox">
                            {this.state.education.map((item, index) => {
                                return (
                                    <div key={index} style={index ? style : null}>
                                        {
                                            index ? <div className="remove"><button>&times; Remove</button></div> : ""
                                        }
                                        <div>
                                            <input onChange={this.handleEducationChange} type="text" name="nameOfSchool" id={item.id} placeholder='School' value={item.school}/>
                                        </div>
                                        <div>
                                            <input onChange={this.handleEducationChange} type="text" name="titleOfStudy" id={item.id} placeholder='Degree' value={item.degree}/>
                                        </div>
                                        <div className='tDuration'>
                                            <div>
                                            <label htmlFor="stdDurationFrom">Start</label>
                                            <input onChange={this.handleEducationChange} type="month" name="start" id={item.id} value={item.start}/>
                                            </div>
                                            <div>
                                            <label htmlFor="stdDurationTo">End</label>
                                            <input onChange={this.handleEducationChange} type="month" name="end" id={item.id} value={item.end}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div >
                        <button className="add">+ Add More Education</button>
                        </fieldset>
                        <fieldset>
                        <legend>Work Experience</legend>
                        <div id="workBox">
                            {this.state.work.map((item, index) => {
                            
                                return (
                                    <div key={index} style={index ? style : null}>
                                        {
                                            index ? <div className="remove"><button>&times; Remove</button></div> : ""
                                        }
                                        <div>
                                            <div><input onChange={this.handleWorkChange} type="text" name="company" id={item.id} placeholder='Company' value={item.nameOfCompany}/></div>
                                            <div><input onChange={this.handleWorkChange} type="text" name="position" id={item.id} placeholder='Position' value={item.positionTitle}/></div>
                                            <div><input onChange={this.handleWorkChange} type="text" name="responsibility" id={item.id} placeholder='Responsibility' value={item.responsilility}/></div>
                                        </div>
                                        <div className='tDuration'>
                                            <div>
                                            <label htmlFor="prtDurationFrom">Start</label>
                                            <input onChange={this.handleWorkChange} type="month" name="start" id={item.id} value={item.start}/>
                                            </div>
                                            <div>
                                            <label htmlFor="prtDurationTo">End</label>
                                            <input onChange={this.handleWorkChange} type="month" name="end" id={item.id} value={item.end}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <button className="add">+ Add More Work Experience</button>
                        </fieldset>
                        <fieldset id="skill">
                            <legend>Skills</legend>
                            {this.state.skills.map((skill, index) => {
                                {
                                    skillCount = index
                                }
                                return (
                                    <div key={index}>
                                        <div className="skillFlex">
                                            <input onChange={this.handleSkillChange} type="text" name="skill" id={skill.id} value={skill.skill} placeholder="Skill"/>
                                            {
                                                index ? <div className="remove"><button>&times;</button></div> : ""
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                            {
                                skillCount < 2 ?  <button className="add">+ Add Skill</button> : ''
                            }
                        </fieldset>
                        <fieldset id="contact">
                            <legend>Contact</legend>
                            <div className='half'>
                                <input onChange={this.handleContactChange} type="number" name='phone' placeholder='Phone' value={this.state.contact[0].text}/>
                                <input onChange={this.handleContactChange} type="email"  name="email" placeholder='Email'value={this.state.contact[1].text}/>
                        </div>
                        <div>
                            <input onChange={this.handleContactChange} type="text" id='fLocation' name="address" placeholder='Address' value={this.state.contact[2].text}/>
                        </div>
                        </fieldset>
                    </div>
                    <div id="fSubmit"><button id='formSubmit'>Submit</button></div>
                </form>
            </div>
            </>
        )
    }
}

export default Form