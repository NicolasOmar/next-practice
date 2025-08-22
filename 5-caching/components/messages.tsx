import React from 'react'

interface Message {
  id: number
  text: string
}

interface MessagesProps {
  messages: Message[]
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <ul className='messages'>
      {messages.map(message => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  )
}

export default Messages
