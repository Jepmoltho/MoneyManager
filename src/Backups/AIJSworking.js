import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import config from "./confiq.json";

export default function AIJS() {
  //Input message
  const [message, setMessage] = useState("");
  //Array of messages
  const [chats, setChats] = useState([]);
  //Is chatGPT in the process of replying
  const [isTyping, setIsTyping] = useState(false);

  //API configuration
  const configuration = new Configuration({
    apiKey: config.apiKey,
    organisationID: config.organisationID,
  });

  //openai object
  const openai = new OpenAIApi(configuration);

  async function chat(e, message) {
    e.preventDefault();

    if (message.length < 1) {
      return null;
    }

    setIsTyping(true);
    //Create variable and reference chats array of messages
    let messages = chats;
    //create message object
    let msgObject = { role: "user", content: message };
    //push current message object to the reference of the message array
    messages.push(msgObject);
    setChats(messages);
    setMessage("");

    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a EbereGPT. You can help with money related tasks",
          },
          ...chats,
        ],
      })
      .then((res) => {
        messages.push(res.data.choices[0].message);
        setChats(messages);
        setIsTyping(false);
        //scrollTo(0, 1e10);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /*
  async function chat(e, message) {
    e.preventDefault();

    if (message.length < 1) {
      return null;
    }

    setIsTyping(true);
    //
    const newMessage = {
      role: "user",
      message: message,
    };

    setChats((prevChats) => [...prevChats, newMessage]);
    //
    setMessage("");
    let msgs = chats;

    //
    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a EbereGPT. You can help with money related tasks",
          },
          ...chats,
        ],
      })
      .then((res) => {
        msgs.push(res.data.choices[0].message);
        setChats(msgs);
        //msgs.push(res.data.choices[0].message);
        //setChats(msgs);
        setIsTyping(false);
        //scrollTo(0, 1e10);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  */
  /*
  const chat = async (e, message) => {
    e.preventDefault();
    if (!message) return;
    setIsTyping(true);
    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    setMessage("");

    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a EbereGPT. You can help with money related tasks",
          },
          ...chats,
        ],
      })
      .then((res) => {
        msgs.push(res.data.choices[0].message);
        setChats(msgs);
        setIsTyping(false);
        //scrollTo(0, 1e10);
      })
      .catch((error) => {
        console.log(error);
      });
  };
*/
  return (
    <div>
      <h2>Chat to an AI money expert</h2>
      <section>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                <span>
                  <b>{chat.role.toUpperCase()}</b>
                </span>
                <span>:</span>
                <span>{chat.content}</span>
              </p>
            ))
          : ""}
      </section>
      <form action="" onSubmit={(e) => chat(e, message)}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type a message here and hit Enter..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
      <div className={isTyping ? "" : "hide"}>
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>
    </div>
  );
}
