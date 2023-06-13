import React, { useState } from 'react'
import { Client} from '../components/Client';
import Editor from '../components/Editor';
function EditorPage() {
    const [clients, setClients] = useState([
        {socketId: 1, username: 'Madhav'},
        {socketId: 2, username: 'Prashath'},
        {socketId: 3, username: 'Django'}
    ]);
  return <div className="mainWrapper">
    <div className="aside">
        <div className="asideInner">
            <div className="logo">
                <img className='logoImage' src="/code-sync.png" alt="logo" />
            </div>
            <h3>Connected</h3>
            <div className="clientsList">
                {
                    clients.map( 
                        (client) => (<Client key={client.socketId} username={client.username}/> )
            )}
            </div>
        </div>
        <button className='btn copyBtn'>Copy Room ID</button>
        <button className='btn leaveBtn'>Leave</button>
    </div>
    <div className="editorWrap">
        <Editor />
    </div>
  </div>
}

export default EditorPage