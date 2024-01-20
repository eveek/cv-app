import PropTypes from 'prop-types'

const style = {
        marginTop: '20px',
        paddingTop: '20px',
        borderTop: '1px solid  rgb(56, 105, 239)'
    }

function Work (props) {
    const {work, onChange, addWork, currentWork, removeWork} = props

    return (
        <>
        <fieldset>
                        <legend>Work Experience</legend>
                        <div id="workBox">
                            {work.map((item, index) => {
                            
                                return (
                                    <div key={index} style={index ? style : null}>
                                        {
                                            index ? <div onClick={(e) => removeWork(e, index)} id={index} className="remove"><button>&times; Remove</button></div> : ""
                                        }
                                        <div>
                                            <div><input autoComplete="off" onChange={onChange} type="text" name="company" id={item.id} placeholder='Company' value={item.nameOfCompany}/></div>
                                            <div><input autoComplete="off" onChange={onChange} type="text" name="position" id={item.id} placeholder='Position' value={item.positionTitle}/></div>
                                            <div><textarea autoComplete="off" onChange={onChange} type="text" name="responsibility" id={item.id} placeholder='Responsibility' value={item.responsibility}/></div>
                                        </div>
                                        <div className='checkBox'><input onChange={currentWork} type="checkbox" name="presentWork" id={item.id} checked={item.currently} /> I am currently working in this role</div>
                                        <div className='tDuration'>
                                            <div>
                                            <label htmlFor="prtDurationFrom">Start date</label>
                                            <input autoComplete="off" onChange={onChange} type="month" name="start" id={item.id} value={item.start}/>
                                            </div>
                                            <div disabled={item.disabled}>
                                            <label htmlFor="prtDurationTo">End date</label>
                                            <input autoComplete="off" onChange={onChange} type="month" name="end" id={item.id} value={item.end}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {
                            work.length < 3 ? <button className="add" onClick={addWork}>+ Add More Work Experience</button> : ''
                        }
                        </fieldset>
        </>
    )
}

Work.propTypes = {
    work: PropTypes.array,
    onChange: PropTypes.func,
    addWork: PropTypes.func,
    removeWork: PropTypes.func,
    currentWork: PropTypes.func
}

export default Work