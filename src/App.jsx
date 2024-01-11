// import { useState } from 'react'
import './styles/Landing.css'
import './styles/Create.css'
import './styles/Display.css'
import Landing from './components/Landing'
import Create from './components/Create'


function App() {


  return (
    <>
      <div className="landingMessage">
        <div className='page'>
          <Landing/>
          <div className="pageTwo">
          <Create/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
