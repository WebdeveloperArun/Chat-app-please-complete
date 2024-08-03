import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div className='flex flex-col overflow-auto gap-1'>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
    </div>
  )
}

export default Conversations
