

export default function Education () {
    const eduStyle = {
        marginBottom: "50px"
    }
    return (
        <div style={eduStyle}>
            <div>
                <input type="text" name="schoolName" id="schollName" placeholder='Name of School' />
            </div>
            <div>
                <input type="text" name="course" id="course" placeholder='Title of Study' />
            </div>
            <div className='tDuration'>
                <div>
                <label htmlFor="stdDurationFrom">From</label>
                <input type="month" name="stdDurationFrom" id="stdDurationFrom" />
                </div>
                <div>
                <label htmlFor="stdDurationTo">To</label>
                <input type="month" name="stdDurationTo" id="stdDurationTo" />
                </div>
            </div>
        </div>
    )
}