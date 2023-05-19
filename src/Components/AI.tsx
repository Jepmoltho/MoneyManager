import { Configuration, OpenAIApi } from "openai";
import readline from "readline";
import fs from "fs";
import { useState } from "react";

const confiqData = fs.readFileSync("../confiq.json").toString();
const confiq = JSON.parse(confiqData);
const apiKey = confiq.apiKey;
const organisationID = confiq.organisationID;

const [message, setMessage] = useState("");
const [chats, setChats] = useState([]);
const [isTyping, setIsTyping] = useState(false);

const configuraiton = new Configuration({
  organization: organisationID,
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuraiton);
//let msgs: { role: string; content: any }[] = [];

const chat = async (e: any, message: any) => {
  e.preventDefault();
  if (!message) return;
  setIsTyping(true);
  //
  //{role: user | assistant, content: message to be sent
  //
  /*
  let msgs = chats;
  msgs.push({ role: "user", content: message });
  setChats(msgs);

  setMessage("");
  */
};

export function AI() {
  return (
    <div>
      <h2>Chat to an AI money expert</h2>
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
