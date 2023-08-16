import React, { useContext } from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext  } from '../context/ChatContext'

const Chat = () => {

  const {data} = useContext(ChatContext)

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <img alt='' src='https://img.icons8.com/ios/50/ffffff/video-call.png' />
          <img alt='' src='https://img.icons8.com/pastel-glyph/64/ffffff/add-male-user.png' />
          <img alt='' src='https://img.icons8.com/ios-filled/50/ffffff/more.png' />
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat