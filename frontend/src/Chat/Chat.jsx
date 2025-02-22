import Sidebar from '../Sidebar';
import ChatBox from './ChatBox';    

function Chat() {
    return (
        <>
        <Sidebar />
        <div className='chat-container'>
            <h1>Chat</h1>
            <ChatBox name="Noah" message="Hello, how are you?🤗" response="Doing good, hbu?😃"/>
            <ChatBox name="Tanner" message="Hey, what's up?😎" response=""/>
            <ChatBox name="Luke" message="Nice to meet you!😊" response="Likewise!👌"/>
        </div>
        </>
    )
}

export default Chat;