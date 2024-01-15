import PropTypes from 'prop-types'

function Personal ({personal, onChange}) {


    return (
        <>
            <fieldset id='personal'>
                <legend>Personal Information</legend>
                <div className='half'>
                    <input autoComplete="off" onChange={onChange} type="text"  name='firstname' placeholder='Firstname' value={personal[0].text}/>
                    <input autoComplete="off" onChange={onChange} type="text"  name='lastname' placeholder='Lastname' value={personal[1].text}/>
                </div>
                <div>
                    <input autoComplete="off" type="text"onChange={onChange} name="profession" placeholder="Professional Title" value={personal[2].text} />
                </div>
            </fieldset>
        </>
    )
}

Personal.propTypes = {
    personal: PropTypes.array,
    onChange: PropTypes.func
}

export default Personal