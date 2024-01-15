import PropTypes from 'prop-types'


function Contact ({contact, onChange}) {

    return (
        <>
        <fieldset id="contact">
                            <legend>Contact</legend>
                            <div className='half'>
                                <input autoComplete="off" onChange={onChange} type="number" name='phone' placeholder='Phone' value={contact[0].text}/>
                                <input autoComplete="off" onChange={onChange} type="email"  name="email" placeholder='Email'value={contact[1].text}/>
                        </div>
                        <div>
                            <input autoComplete="off" onChange={onChange} type="text" id='fLocation' name="address" placeholder='Address' value={contact[2].text}/>
                        </div>
                        </fieldset>
        </>
    )
}

Contact.propTypes = {
    contact: PropTypes.array,
    onChange: PropTypes.func
}

export default Contact