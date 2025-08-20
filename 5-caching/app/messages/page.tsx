import React from 'react'
import Messages from '@/components/messages'

/*
  A way to configure a next's page fetching strategy can be through
  exporting certain words such as revalidate, which will be set on file's
  fetch configuration even if has not been set on the fetch itself
*/
// export const revalidate = 10
/*
  Other reserved word is dynamic, which will set the cache strategy if
  the dev wants to ask for new data always ('force-dynamic'), never asking
  ('force-static') or its default value
*/
// export const dynamic = 'force-dynamic' // 'always-dynamic', 'force-static', 'force-dynamic'

const MessagesPage: React.FC = async () => {
  /*
    the fetch function on this component is one overwritten by next to include
    custom improvements on serveral features such as caching
  */
  const response = await fetch('http://localhost:8080/messages', {
    // the default behaviour is 'no-store', that will not save any cache on any circumstance
    // if you want more granular control, you can use 'force-cache' or 'only-if-cached'
    // cache: 'no-store'
    next: {
      revalidate: 10 // will revalidate and rerequest the data every 10 seconds
    }
  })
  const messages: { id: number; text: string }[] = await response.json()

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>
  }

  return <Messages messages={messages} />
}

export default MessagesPage
