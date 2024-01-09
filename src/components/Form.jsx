import { useState } from "react"
// import clickFunc from "./clickFunc"

function Form () {

    const initialForm = {
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

    const [formValues, setFormValues] = useState(initialForm)

    let personalInfo = formValues.personal[0]
    let education = formValues.educational
    let work = formValues.work


    function handleChange (i, e, cat) {
        let newFormValues = formValues
        newFormValues[cat][i][e.target.name] = e.target.value
        setFormValues(newFormValues)
        console.log(e.target.value)
    }

    function addEdu (e) {
        e.preventDefault()
        let newFormValues = formValues
        const newEdu = {
                nameOfSchool: '',
                titleOfStudy: '',
                from: '',
                to: ''
            }
        newFormValues.educational.push(newEdu)
        setFormValues(newFormValues)
        console.log(formValues)
    }

    const style = {
        marginTop: '20px',
        paddingTop: '20px',
        borderTop: '1px solid  rgb(56, 105, 239)'
    }



    return (
        <>
        <div className='formBox'>
                <form action="">
                    <div id="formScroll">
                        <fieldset id='personal'>
                        <legend>Personal Information</legend>
                        <div className='full'><input onChange={e => handleChange(0, e, 'personal')} type="text" id='fName' name='fullname' placeholder='Fullname' value={personalInfo.fullname}/></div>
                        <div id='phem'>
                            <input onChange={e => handleChange(0, e, 'personal')} type="tel" id='fPhone' name='phone' placeholder='Phone' value={personalInfo.phone}/>
                            <input onChange={e => handleChange(0, e, 'personal')} type="email" id='fEmail' name="email" placeholder='Email'value={personalInfo.email}/>
                        </div>
                        <div>
                            <input onChange={e => handleChange(0, e, 'personal')} type="text" id='fLocation' name="address" placeholder='Address' value={personalInfo.address}/>
                        </div>
                        <div id="DOBox">
                            <label htmlFor="fDOB">Date of birth</label>
                            <input onChange={e => handleChange(0, e, 'personal')} type="date" id='fDOB' name="dateOfBirth" placeholder='Date of Birth' value={personalInfo.dateOfBirth}/>
                        </div>
                        </fieldset>
                        <fieldset id='eduExp'>
                        <legend>Educational Experience</legend>
                        <div id="eduBox">
                            {education.map((item, index) => {
                                return (
                                    <div key={index} style={index ? style : null}>
                                        {
                                            index ? <div className="remove"><button>&times; Remove</button></div> : ""
                                        }
                                        <div>
                                            <input onChange={e => handleChange(index, e, 'educational')} type="text" name="nameOfSchool" id="schollName" placeholder='Name of School' value={item.nameOfSchool}/>
                                        </div>
                                        <div>
                                            <input onChange={e => handleChange(index, e, 'educational')} type="text" name="titleOfStudy" id="course" placeholder='Title of Study' value={item.titleOfStudy}/>
                                        </div>
                                        <div className='tDuration'>
                                            <div>
                                            <label htmlFor="stdDurationFrom">From</label>
                                            <input onChange={e => handleChange(index, e, 'educational')} type="month" name="from" id="stdDurationFrom" value={item.from}/>
                                            </div>
                                            <div>
                                            <label htmlFor="stdDurationTo">To</label>
                                            <input onChange={e => handleChange(index, e, 'educational')} type="month" name="to" id="stdDurationTo" value={item.to}/>
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
                                            <div><input onChange={e => handleChange(index, e, 'work')} type="text" name="nameOfCompany" id="companyName" placeholder='Name of company' value={item.nameOfCompany}/></div>
                                            <div><input onChange={e => handleChange(index, e, 'work')} type="text" name="positionTitle" id="pTitle" placeholder='Position title' value={item.positionTitle}/></div>
                                            <div><input onChange={e => handleChange(index, e, 'work')} type="text" name="responsibility" id="pResp" placeholder='Main responsibility' value={item.responsilility}/></div>
                                        </div>
                                        <div className='tDuration'>
                                            <div>
                                            <label htmlFor="prtDurationFrom">From</label>
                                            <input onChange={e => handleChange(index, e, 'work')} type="month" name="from" id="prtDurationFrom" value={item.from}/>
                                            </div>
                                            <div>
                                            <label htmlFor="prtDurationTo">To</label>
                                            <input onChange={e => handleChange(index, e, 'work')} type="month" name="to" id="prtDurationTo" value={item.to}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <button className="add">+ Add Work Experience</button>
                        </fieldset>
                    </div>
                    <div id="fSubmit"><button id='formSubmit'>Submit</button></div>
                </form>
            </div>
        </>
    )
}

export default Form