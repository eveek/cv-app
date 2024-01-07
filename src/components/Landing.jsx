// import Button from "./Button";

function Landing () {


    function closeLandingPage () {
        const page = document.querySelector(".page");
        page.style.top = "-1000px"
    }


    return (
    <>
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
    </>
    )
}


export default Landing