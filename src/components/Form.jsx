import Work from "./workEx"
import Education from "./eduEx"
import Personal from "./personalInfo"
import clickFunc from "./clickFunc"

function Form () {

    return (
        <>
        <div className='formBox'>
                <form action="">
                    <div id="formScroll">
                        <fieldset id='personal'>
                        <legend>Personal Information</legend>
                        <Personal/>
                        </fieldset>
                        <fieldset id='eduExp'>
                        <legend>Educational Experience</legend>
                        <div id="eduBox">
                            <Education/>
                        </div>
                        <button>+ Add Educational Experience</button>
                        </fieldset>
                        <fieldset>
                        <legend>Work Experience</legend>
                        <div id="workBox">
                            <Work/>
                        </div>
                        <button onClick={clickFunc().clickWork}>+ Add Work Experience</button>
                        </fieldset>
                    </div>
                    <div id="fSubmit"><button id='formSubmit'>Create CV</button></div>
                </form>
            </div>
        </>
    )
}

export default Form