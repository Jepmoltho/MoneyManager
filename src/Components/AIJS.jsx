import { Configuration, OpenAIApi } from "openai";
//import readline from "readline";
//import fs from "fs";
import { useState } from "react";
import config from "../confiq.json";

export default function AIJS() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const configuration = new Configuration({
    apiKey: config.apiKey,
    organisationID: config.organisationID,
  });

  const openai = new OpenAIApi(configuration);

  const chat = async (e, message) => {
    e.preventDefault();
    if (!message) return;
    setIsTyping(true);
    //
    //
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
