import PropTypes from 'prop-types'


const style = {
        marginTop: '20px',
        paddingTop: '20px',
        borderTop: '1px solid  rgb(56, 105, 239)'
    }

function Education (props) {
    const {education, onChange, addExp, removeExp} = props

    return (
        <>
            <fieldset id='education'>
                <legend>Education</legend>
                <div id="eduBox">
                    {education.map((item, index) => {
                        return (
                            <div key={index} style={index ? style : null}>
                                {
                                    index ? <div onClick={(e) => removeExp(e, index)} className="remove"><button>&times; Remove</button></div> : ""
                                }
                                <div>
                                    <input autoComplete="off" onChange={onChange} type="text" name="school" id={item.id} placeholder='School' value={item.school}/>
                                </div>
                                <div>
                                    <input autoComplete="off" onChange={onChange} type="text" name="degree" id={item.id} placeholder='Degree' value={item.degree}/>
                                </div>
                                <div className='tDuration'>
                                    <div>
                                    <label htmlFor="stdDurationFrom">Start</label>
                                    <input autoComplete="off" onChange={onChange} type="month" name="start" id={item.id} value={item.start}/>
                                    </div>
                                    <div>
                                    <label htmlFor="stdDurationTo">End</label>
                                    <input autoComplete="off" onChange={onChange} type="month" name="end" id={item.id} value={item.end}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div >
                {
                    education.length < 3 ? <button onClick={addExp} className="add">+ Add More Education</button> : ''
                }
            </fieldset>
        </>
    )
}

Education.propTypes = {
    education: PropTypes.array,
    onChange: PropTypes.func,
    addExp: PropTypes.func,
    removeExp: PropTypes.func
}

export default Education

