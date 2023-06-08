import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import config from "../confiq.json";

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

    let messages = chats;
    const userMessage = { role: "user", content: message };
    messages.push(userMessage);

    /*
    
    */

    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a EbereGPT. You can help with money related tasks",
          },
          ...messages,
        ],
      })
      .then((response) => {
        const newMessage = response.data.choices[0].message;
        const updatedChats = [...messages, newMessage];
        setChats(updatedChats);
        setIsTyping(false);
      })
      .catch((error) => {
        console.log(error);
      });

    setMessage("");
  }

  function displayChatMessages() {
    if (chats && chats.length > 0) {
      return chats.map((chat, index) => (
        <p key={index}>
          <span>
            <b>{chat.role.toUpperCase()}</b>
          </span>
          <span>:</span>
          <span>{chat.content}</span>
        </p>
      ));
    } else {
      return null;
    }
  }

  function displayIsTyping() {
    if (isTyping === true) {
      return (
        <div>
          <p>
            <i>Typing</i>
          </p>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      <h2>Chat to an AI money expert</h2>
      <section>{displayChatMessages()}</section>

      <form onSubmit={(e) => chat(e, message)}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Enter text here sempai"
          onChange={(e) => setMessage(e.target.value)}
        ></input>
      </form>
      {displayIsTyping()}
    </div>
  );
}
