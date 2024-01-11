import React from "react"
import { v4 as uuidv4 } from 'uuid'

const style = {
        marginTop: '20px',
        paddingTop: '20px',
        borderTop: '1px solid  rgb(56, 105, 239)'
    }


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
            education: [
                {
                    id: uuidv4(),
                    school: '',
                    degree: '',
                    start: '',
                    end: ''
                }
            ],
            work: [
                {
                    id: uuidv4(),
                    company: '',
                    position: '',
                    responsibility: '',
                    start: '',
                    end: ''
                },
            ],
        }
        this.handlePersonalChange = this.handlePersonalChange.bind(this)
        this.handleEducationChange = this.handleEducationChange.bind(this)
        this.handleWorkChange = this.handleWorkChange.bind(this)
        this.handleProfileChange = this.handleProfileChange.bind(this)
        this.handleContactChange = this.handleContactChange.bind(this)
        this.handleSkillChange = this.handleSkillChange.bind(this)
        this.handleWorkAdd = this.handleWorkAdd.bind(this)
        this.handleEducationAdd = this.handleEducationAdd.bind(this)
        this.handleSkillAdd = this.handleSkillAdd.bind(this)
        this.removeWork = this.removeWork.bind(this)
        this.removeEducation = this.removeEducation.bind(this)
        this.removeSkill = this.removeSkill.bind(this)
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

    handleWorkAdd(event) {
        event.preventDefault()
        this.setState({
            work: this.state.work.concat({
                id: uuidv4(),
                company: '',
                position: '',
                responsibility: '',
                start: '',
                end: ''
            })
        })
    }
    handleEducationAdd(event) {
        event.preventDefault()
        this.setState({
            education: this.state.education.concat({
                id: uuidv4(),
                school: '',
                degree: '',
                start: '',
                end: ''
            })
        })
    }
    handleSkillAdd(event) {
        event.preventDefault()
        this.setState({
            skills: this.state.skills.concat({id: uuidv4(), skill: ''})
        })
    }

    removeWork(event,index) {
        event.preventDefault()
        const list = [...this.state.work]
        list.splice(index, 1)

        this.setState({
            work: list
        })
    }

    removeEducation(event, index) {
        event.preventDefault()
        const list = [...this.state.education]
        list.splice(index, 1)

        this.setState({
            education: list
        })
    }

    removeSkill(event, index) {
        event.preventDefault()
        const list = [...this.state.skills]
        list.splice(index, 1)

        this.setState({
            skills: list
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
                            <input autoComplete="off" onChange={this.handlePersonalChange} type="text"  name='firstname' placeholder='Firstname' value={this.state.personal[0].firstname}/>
                            <input autoComplete="off" onChange={this.handlePersonalChange} type="text"  name='lastname' placeholder='Lastname' value={this.state.personal[1].lastname}/>
                        </div>
                        <div>
                            <input autoComplete="off" type="text"onChange={this.handlePersonalChange} name="profession" placeholder="Professional Title" value={this.state.personal[2].profession} />
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
                                            index ? <div onClick={(e) => this.removeEducation(e, index)} className="remove"><button>&times; Remove</button></div> : ""
                                        }
                                        <div>
                                            <input autoComplete="off" onChange={this.handleEducationChange} type="text" name="school" id={item.id} placeholder='School' value={item.school}/>
                                        </div>
                                        <div>
                                            <input autoComplete="off" onChange={this.handleEducationChange} type="text" name="degree" id={item.id} placeholder='Degree' value={item.degree}/>
                                        </div>
                                        <div className='tDuration'>
                                            <div>
                                            <label htmlFor="stdDurationFrom">Start</label>
                                            <input autoComplete="off" onChange={this.handleEducationChange} type="month" name="start" id={item.id} value={item.start}/>
                                            </div>
                                            <div>
                                            <label htmlFor="stdDurationTo">End</label>
                                            <input autoComplete="off" onChange={this.handleEducationChange} type="month" name="end" id={item.id} value={item.end}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div >
                        {
                            this.state.education.length < 3 ? <button onClick={this.handleEducationAdd} className="add">+ Add More Education</button> : ''
                        }
                        </fieldset>
                        <fieldset>
                        <legend>Work Experience</legend>
                        <div id="workBox">
                            {this.state.work.map((item, index) => {
                            
                                return (
                                    <div key={index} style={index ? style : null}>
                                        {
                                            index ? <div onClick={(e) => this.removeWork(e, index)} id={index} className="remove"><button>&times; Remove</button></div> : ""
                                        }
                                        <div>
                                            <div><input autoComplete="off" onChange={this.handleWorkChange} type="text" name="company" id={item.id} placeholder='Company' value={item.nameOfCompany}/></div>
                                            <div><input autoComplete="off" onChange={this.handleWorkChange} type="text" name="position" id={item.id} placeholder='Position' value={item.positionTitle}/></div>
                                            <div><input autoComplete="off" onChange={this.handleWorkChange} type="text" name="responsibility" id={item.id} placeholder='Responsibility' value={item.responsibility}/></div>
                                        </div>
                                        <div className='tDuration'>
                                            <div>
                                            <label htmlFor="prtDurationFrom">Start</label>
                                            <input autoComplete="off" onChange={this.handleWorkChange} type="month" name="start" id={item.id} value={item.start}/>
                                            </div>
                                            <div>
                                            <label htmlFor="prtDurationTo">End</label>
                                            <input autoComplete="off" onChange={this.handleWorkChange} type="month" name="end" id={item.id} value={item.end}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {
                            this.state.work.length < 3 ? <button className="add" onClick={this.handleWorkAdd}>+ Add More Work Experience</button> : ''
                        }
                        </fieldset>
                        <fieldset id="skill">
                            <legend>Skills</legend>
                            {this.state.skills.map((skill, index) => {

                                return (
                                    <div key={index}>
                                        <div className="skillFlex">
                                            <input autoComplete="off" onChange={this.handleSkillChange} type="text" name="skill" id={skill.id} value={skill.skill} placeholder="Skill"/>
                                            {
                                                index ? <div className="remove"><button onClick={(e) => this.removeSkill(e, index)}>&times;</button></div> : ""
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                            {
                                this.state.skills.length < 6 ?  <button onClick={this.handleSkillAdd} className="add">+ Add More Skill</button> : ''
                            }
                        </fieldset>
                        <fieldset id="contact">
                            <legend>Contact</legend>
                            <div className='half'>
                                <input autoComplete="off" onChange={this.handleContactChange} type="number" name='phone' placeholder='Phone' value={this.state.contact[0].text}/>
                                <input autoComplete="off" onChange={this.handleContactChange} type="email"  name="email" placeholder='Email'value={this.state.contact[1].text}/>
                        </div>
                        <div>
                            <input autoComplete="off" onChange={this.handleContactChange} type="text" id='fLocation' name="address" placeholder='Address' value={this.state.contact[2].text}/>
                        </div>
                        </fieldset>
                    </div>
                    <div id="fSubmit"><button onClick={this.handleSubmit} id='formSubmit'>Submit</button></div>
                </form>
            </div>
            </>
        )
    }
}

export default Form