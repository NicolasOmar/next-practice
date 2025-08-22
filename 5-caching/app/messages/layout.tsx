import { getMessages } from '@/lib/messages'
import React, { ReactNode } from 'react'

interface MessagesLayoutProps {
  children: ReactNode
}

const MessagesLayout: React.FC<MessagesLayoutProps> = async ({ children }) => {
  const response = await fetch('http://localhost:8080/messages', {
    headers: {
      'X-ID': 'layout'
    }
  })
  const messages: { id: number; text: string }[] = await getMessages()
  const totalMessages = messages.length

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  )
}

export default MessagesLayout
