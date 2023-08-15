import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Jane</span>
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