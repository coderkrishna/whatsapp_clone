import React from 'react'
import "./chat.css"
import { Avatar,IconButton } from "@material-ui/core";
import { MicOutlined, InsertEmoticon, SearchOutlined , AttachFile , MoreVert } from "@material-ui/icons"

const chat = () => {
    return (
        <div className = "chat">
           <div className = "chat_header">
               <Avatar />
               <div className = "chat_headerInfo">
                 <h3>Room name</h3>
                 <p>Last seen at ...</p>
               </div>

               <div className = "chat_headerRight">
                    <IconButton>
                       <SearchOutlined />
                    </IconButton> 
                    <IconButton>
                       <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
               </div>
           </div>
           <div className = "chat_body">
             <p className = "chat_message">
             <span className="chat_name">Krishna</span>
             This is the message
             <span className = "chat_timestamp">
             {new Date().toUTCString()}
             </span>
             </p>

             <p className = "chat_message chat_reciever">
             <span className="chat_name">Krishna</span>
             This is the message
             <span className = "chat_timestamp">
             {new Date().toUTCString()}
             </span>
             </p>


             <p className = "chat_message">
             <span className="chat_name">Krishna</span>
             This is the message
             <span className = "chat_timestamp">
             {new Date().toUTCString()}
             </span>
             </p>

           </div>            

           <div className="chat_footer">
             <IconButton>
             <InsertEmoticon />
             </IconButton>
             <form>
               <input  placeholder = "Type a message" type = "text" />
               <button type="submit">Send a Message</button>
             </form>
             <IconButton>
             <MicOutlined />
             </IconButton>           
           </div>
        </div>
    )
}

export default chat
