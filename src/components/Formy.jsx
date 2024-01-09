import React from "react"


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            personal: [
            {
                fullname: '',
                phone: '',
                email: '',
                address: '',
                dateOfBirth: ''
            }
        ],
        educational: [
            {
                nameOfSchool: '',
                titleOfStudy: '',
                from: '',
                to: ''
            },
            {
                nameOfSchool: '',
                titleOfStudy: '',
                from: '',
                to: ''
            }
        ],
        work: [
            {
                nameOfCompany: '',
                positionTitle: '',
                responsilility: '',
                from: '',
                to: ''
            },
            {
                nameOfCompany: '',
                positionTitle: '',
                responsilility: '',
                from: '',
                to: ''
            }
        ]
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange(event, index, cat) {
        const target = event.target
        const value = target.value
        const name = target.name
        const element = this.state[cat][index][name]
        this.setState({
            [element] : value
        })
    }

    handleSubmit (event) {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <>
            <div className='formBox'>
                <form action="" onSubmit={this.handleSubmit}>
                    <div id="formScroll">
                        <fieldset id='personal'>
                        <legend>Personal Information</legend>
                        <div className='full'><input onChange={e => this.handleInputChange(e, 0, 'personal')} type="text" id='fName' name='fullname' placeholder='Fullname' value={this.state.personal.fullname}/></div>
                        <div id='phem'>
                            <input onChange={this.handleInputChange} type="tel" id='fPhone' name='phone' placeholder='Phone' value={this.state.personal.phone}/>
                            <input onChange={this.handleInputChange} type="email" id='fEmail' name="email" placeholder='Email'value={this.state.personal.email}/>
                        </div>
                        <div>
                            <input onChange={this.handleInputChange} type="text" id='fLocation' name="address" placeholder='Address' value={this.state.personal.address}/>
                        </div>
                        <div id="DOBox">
                            <label htmlFor="fDOB">Date of birth</label>
                            <input onChange={this.handleInputChange} type="date" id='fDOB' name="dateOfBirth" placeholder='Date of Birth' value={this.state.personal.dateOfBirth}/>
                        </div>
                        </fieldset>
                        {/* <fieldset id='eduExp'>
                        <legend>Educational Experience</legend>
                        <div id="eduBox">
                            {education.map((item, index) => {
                                return (
                                    <div key={index} style={index ? style : null}>
                                        {
                                            index ? <div className="remove"><button>&times; Remove</button></div> : ""
                                        }
                                        <div>
                                            <input onChange={e => handleInputChange(index, e, 'educational')} type="text" name="nameOfSchool" id="schollName" placeholder='Name of School' value={item.nameOfSchool || ''}/>
                                        </div>
                                        <div>
                                            <input onChange={e => handleInputChange(index, e, 'educational')} type="text" name="titleOfStudy" id="course" placeholder='Title of Study' value={item.titleOfStudy || ''}/>
                                        </div>
                                        <div className='tDuration'>
                                            <div>
                                            <label htmlFor="stdDurationFrom">From</label>
                                            <input onChange={e => handleInputChange(index, e, 'educational')} type="month" name="from" id="stdDurationFrom" value={item.from || ''}/>
                                            </div>
                                            <div>
                                            <label htmlFor="stdDurationTo">To</label>
                                            <input onChange={e => handleInputChange(index, e, 'educational')} type="month" name="to" id="stdDurationTo" value={item.to || ''}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div >
                        <button className="add" onClick={e => addEdu(e)}>+ Add Educational Experience</button>
                        </fieldset>
                        <fieldset>
                        <legend>Work Experience</legend>
                        <div id="workBox">
                            {work.map((item, index) => {
                            
                                return (
                                    <div key={index} style={index ? style : null}>
                                        {
                                            index ? <div className="remove"><button>&times; Remove</button></div> : ""
                                        }
                                        <div>
                                            <div><input onChange={e => handleInputChange(index, e, 'work')} type="text" name="nameOfCompany" id="companyName" placeholder='Name of company' value={item.nameOfCompany || ''}/></div>
                                            <div><input onChange={e => handleInputChange(index, e, 'work')} type="text" name="positionTitle" id="pTitle" placeholder='Position title' value={item.positionTitle || ''}/></div>
                                            <div><input onChange={e => handleInputChange(index, e, 'work')} type="text" name="responsibility" id="pResp" placeholder='Main responsibility' value={item.responsilility || ''}/></div>
                                        </div>
                                        <div className='tDuration'>
                                            <div>
                                            <label htmlFor="prtDurationFrom">From</label>
                                            <input onChange={e => handleInputChange(index, e, 'work')} type="month" name="from" id="prtDurationFrom" value={item.from || ''}/>
                                            </div>
                                            <div>
                                            <label htmlFor="prtDurationTo">To</label>
                                            <input onChange={e => handleInputChange(index, e, 'work')} type="month" name="to" id="prtDurationTo" value={item.to || ''}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <button className="add">+ Add Work Experience</button>
                        </fieldset> */}
                    </div>
                    <div id="fSubmit"><button id='formSubmit' type="submit">Submit</button></div>
                </form>
            </div>
            </>
        )
    }
}

export default Form