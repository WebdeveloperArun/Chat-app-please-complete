import React from 'react'
import { useConversationContext } from '../../context/ConversationContext';

const Conversation = ({ conversation, emoji, lastIdx }) => {

  const { selectedConversation, setSelectedConversation } = useConversationContext();
  
  

  const isSelected = selectedConversation?._id === conversation._id;
  
  return (
    <>
      <div
        className={`flex gap-3 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className=" flex gap-3 justify-between items-center">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-2xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation
