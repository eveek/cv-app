

export default function Personal () {

    return (
        <>
            <div className='full'><input type="text" id='fName' placeholder='Fullname'/></div>
            <div id='phem'>
                <input type="tel" id='fPhone' placeholder='Phone'/>
                <input type="email" id='fEmail' placeholder='Email'/>
            </div>
            <div>
                <input type="text" id='fLocation' placeholder='Address' />
            </div>
            <div>
                <input type="date" id='fDOB' placeholder='Date of Birth' />
            </div>
        </>
    )
}