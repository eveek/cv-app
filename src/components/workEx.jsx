

export default function Work () {
    const workStyle = {
        marginBottom: "50px"
    }
    return (
        <div style={workStyle}>
            <div>
                <div><input type="text" name="companyName" id="companyName" placeholder='Name of company' /></div>
                <div><input type="text" name="positionTitle" id="pTitle" placeholder='Position title' /></div>
                <div><input type="text" name="positionResp" id="pResp" placeholder='Main responsibility' /></div>
            </div>
            <div className='tDuration'>
                <div>
                <label htmlFor="prtDurationFrom">From</label>
                <input type="month" name="prtDurationFrom" id="prtDurationFrom" />
                </div>
                <div>
                <label htmlFor="prtDurationTo">To</label>
                <input type="month" name="prtDurationTo" id="prtDurationTo" />
                </div>
            </div>
        </div>
    )
}