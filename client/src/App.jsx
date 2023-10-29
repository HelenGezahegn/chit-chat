import React, { useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import "./App.css";
import { ChannelContainer, ChannelListContainer } from "./components";

const apiKey = "aken6unva5k6";
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer
        //   isCreating={isCreating}
        //   setIsCreating={setIsCreating}
        //   setCreateType={setCreateType}
        //   setIsEditing={setIsEditing}
        />
        <ChannelContainer
        //   isCreating={isCreating}
        //   setIsCreating={setIsCreating}
        //   isEditing={isEditing}
        //   setIsEditing={setIsEditing}
        //   createType={createType}
        />
      </Chat>
    </div>
  );
};

export default App;
