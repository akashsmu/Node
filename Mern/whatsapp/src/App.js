import React, { useEffect } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessage(response.data);
    });
  }, []);

  useEffect(() => {
    var pusher = new Pusher("39e0484560960626b5c3", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      alert(JSON.stringify(data));
      setMessage([...message, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [message]);

  console.log(message);
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={message} />
      </div>
    </div>
  );
}

export default App;
