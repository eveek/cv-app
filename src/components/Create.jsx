import React from "react"
import { v4 as uuidv4 } from 'uuid'
import Display from "./Display"


import Personal from "./personal"
import Profile from "./profile"
import Education from "./education"
import Work from "./work"
import Skills from "./skills"
import Contact from "./contact"


class Create extends React.Component {
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
                    currently: true,
                    disabled: true,
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
        this.currentWork = this.currentWork.bind(this)
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

    currentWork(event) {
        const {id, checked} = event.target
        const newWrk = this.state.work.map(wrk => {
            if (wrk.id == id) {
                wrk['currently'] = checked
                wrk['disabled'] = checked
                
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
                currently: true,
                disabled: true,
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
        const {personal, profile, education, work, skills, contact} = this.state
        return (
            <>
                <div className='formBox'>
                <form action="">
                    <div id="formScroll">
                        <Personal
                        personal={personal}
                        onChange={this.handlePersonalChange}
                        />
                        <Profile
                        profile={profile}
                        onChange={this.handleProfileChange}
                        />
                        <Education
                        education={education}
                        onChange={this.handleEducationChange}
                        removeExp={this.removeEducation}
                        addExp={this.handleEducationAdd}
                        />
                        <Work
                        work={work}
                        onChange={this.handleWorkChange}
                        currentWork={this.currentWork}
                        removeWork={this.removeWork}
                        addWork={this.handleWorkAdd}
                        />
                        <Skills
                        skills={skills}
                        onChange={this.handleSkillChange}
                        removeSkill={this.removeSkill}
                        addSkill={this.handleSkillAdd}
                        />
                        <Contact
                        contact={contact}
                        onChange={this.handleContactChange}
                        />
                    </div>
                </form>
                </div>
                <Display
                personal={personal}
                profile={profile}
                education={education}
                work={work}
                skills={skills}
                contact={contact}
                />
            </>
        )
    }
}

export default Create