import React from 'react'
import Messages from '@/components/messages'

const MessagesPage: React.FC = async () => {
  const response = await fetch('http://localhost:8080/messages', {
    headers: {
      'X-ID': 'page'
    }
  })
  const messages: { id: number; text: string }[] = await response.json()

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>
  }

  return <Messages messages={messages} />
}

export default MessagesPage
