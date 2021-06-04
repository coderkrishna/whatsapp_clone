import {React,useEffect,useState} from 'react'
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Pusher from 'pusher-js';
import axios from "./axios";


function App() {

  const [messages,setMessages] = useState([]); 
  
  useEffect(() => {
     axios.get('api/v1/messages/sync')
     .then( response => {
       setMessages(response.data);     
     })     
  },[])

  useEffect(() => {
    var pusher = new Pusher('8698d31322d7fd9328c1', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',(data) => {
      /*alert(JSON.stringify(data));*/


      setMessages([...messages,data]); 
    });
    return () => {
        channel.unbind_all();
        channel.unsubscribe();
    }; 
  },[messages]);

  console.log(messages)
  return (
    <div className = "app">
      <div className = "app_body">
        <Sidebar />
        <Chat messages = {messages}/>
      </div>      
    </div>
  );
}

export default App;
