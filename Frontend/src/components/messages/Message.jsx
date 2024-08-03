import React from 'react'

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Image"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi? What's upp
      </div>
      <div className='chat-footer opacity-50 text-xs text-white flex gap-1 items-center'>
        12:42
      </div>
    </div>
  );
}

export default Message
