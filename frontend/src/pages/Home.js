import React from 'react'

function Home() {
  return (
    <div className="homePageWrapper">
        <div className="formWrapper">
            <img className='homePageLogo' src="/code-sync.png" alt="editor-logo" />
            <h4 className="mainLabel">Paste Invitation Room Id</h4>
            <div className="inputGroup">
                <input type="text" className='inputBox' placeholder='ROOM ID' />
                <input type="text" className='inputBox' placeholder='USERNAME' />
                <button className='btn joinBtn'>Join Now</button>
                <span className='createInfo'>Don't have an invite? 
                <a href="" className='createNewBtn'>Create Room</a>
                </span>
            </div>
        </div>
        <footer>
            <h4>Built with ❤</h4>
        </footer>
    </div>
  )
}

export default Home