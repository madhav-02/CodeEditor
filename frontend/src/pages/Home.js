import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; 
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('')
    const [username, setUsername] = useState('')
    const createNewRoom = (event) => {
        event.preventDefault();
        const id = uuidv4();
        setRoomId(id)
        toast.success('Created a new room!');

    }

    const joinRoom = () => {
        if(!roomId || !username){
            toast.error("RoomId and Username is required!");
            return;
        }
        // If both entered, navigate to the room
        navigate(`editor/${roomId}`, {
            state: {
                username,
            },
        })
    } 

    const handleInputEnter = (event) => {
        if(event.code === 'Enter') {
            joinRoom();
        }
    }
  return (
    <div className="homePageWrapper">
        <div className="formWrapper">
            <img className='homePageLogo' src="/code-sync.png" alt="editor-logo" />
            <h4 className="mainLabel">Paste Invitation Room Id</h4>
            <div className="inputGroup">
                <input type="text" className='inputBox' placeholder='ROOM ID' onChange={(e) => setRoomId(e.target.value)} value={roomId} onKeyUp={handleInputEnter}/>
                <input type="text" className='inputBox' placeholder='USERNAME' onChange={(e) => setUsername(e.target.value)} value={username} onKeyUp={handleInputEnter}/>
                <button className='btn joinBtn' onClick={joinRoom}>Join Now</button>
                <span className='createInfo'>Don't have an invite? 
                <a onClick={createNewRoom} href="" className='createNewBtn'>Create Room</a>
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