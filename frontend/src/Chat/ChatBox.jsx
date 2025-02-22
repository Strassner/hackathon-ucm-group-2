

function ChatBox({ name, message, response }) {
  return (
    <div className="chat-box">
                <h3>{name}</h3>
                <p style={{justifySelf: "left"}}>{message}</p>
                {response && (
                    <p style={{justifySelf: "right"}}>{response}</p>
                )}

                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <input type="text" className="response-input" placeholder={`Chat with ${name}`} />
                <button className="response-button">Send</button>
                </div>
    </div>
  );



}

export default ChatBox;