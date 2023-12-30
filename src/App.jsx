// import { useState } from 'react'
import './styles/pageOne.css'
import './styles/pageTwo.css'


function App() {

  function closeLandingPage () {
    const page = document.querySelector(".page");
    page.style.top = "-1000px"
  }


  return (
    <>
      <div className="landingMessage">
        <div className='page'>
          <div className="pageOne">
            <div className='One'>
              <div className="logo"></div>
              <h1 className='hOne'><span>Boost</span> your chances of landing that <span>dream</span> job</h1>
              <button
              className='lBtn'
              id='landingBtn'
              onClick={closeLandingPage}
              >Create your CV</button>
            </div>
            <div className='Two'>
            <div className="lImg swing"></div>
            <div className="lImg2"></div>
            </div>
          </div>
          <div className="pageTwo">
            <div className='formBox'>
              <form action="">
                <div id="formScroll">
                  <fieldset id='personal'>
                    <legend>Personal Information</legend>
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
                  </fieldset>
                  <fieldset id='eduExp'>
                    <legend>Educational Experience</legend>
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
                    <button>+ Add Educational Experience</button>
                  </fieldset>
                  <fieldset>
                    <legend>Work Experience</legend>
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
                    <button>+ Add Work Experience</button>
                  </fieldset>
                </div>
                <div id="fSubmit"><button id='formSubmit'>Create CV</button></div>
              </form>
            </div>
            <div className='cvDisplay'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
