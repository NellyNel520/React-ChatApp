import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className='userChat'>
        <img src="https://images.unsplash.com/photo-1691349202760-b139b5238a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="baby" />
        <div className='userChatInfo'>
          <span>Jane Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Search