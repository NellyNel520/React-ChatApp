import React from 'react'

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something...' />
      <div className='send'>
        <img src='https://img.icons8.com/material-sharp/24/attach.png' alt='' />
        <input type='file' style={{display: 'none'}} id='file'/>
        <label htmlFor='file'>
          <img src='https://img.icons8.com/dotty/80/add-image.png' alt='' />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input