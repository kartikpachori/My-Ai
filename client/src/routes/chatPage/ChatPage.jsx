import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
    return (
        <div className="chatPage">
            <div className="wrapper">
                <div className="chat">
                    <div className="message">Text message</div>
                    <div className="message user">Text message</div>
                    <div className="message">Text message</div>
                    <div className="message user">Text message</div>
                    <div className="message">Text message</div>
                    <div className="message user">Text message</div>
                    <div className="message">Text message</div>
                    <div className="message user">Text message</div>
                    <div className="message">Text message</div>
                    <div className="message user">Text message</div>
                    <div className="message">Text message</div>
                    <div className="message user">Text message</div>
                </div>
            </div>
            <NewPrompt />
        </div>
    );
};

export default ChatPage;