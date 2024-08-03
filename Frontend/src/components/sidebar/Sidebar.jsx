import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutBtn from './LogoutBtn'

const Sidebar = () => {
  return (
    <div className='p-5 px-5 border-r border-slate-500 flex flex-col'>
      <SearchInput/>
      <div className='divider px-3'></div>
      <Conversations/>
      <LogoutBtn/>
    </div>
  )
}

export default Sidebar
