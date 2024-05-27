import React from 'react'
import ChatList from './MyNotifications'
import ChatRoom from './ChatRoom'

function Page() {
    return (
        <div>
            <div className='mynotifications   border-transparent rounded-xl  min-h-[100vh] grid grid-cols-3 '>
                <ChatList />
                <div className='messages-box  bg-[black] min-h-[100vh]  col-start-2 col-end-4 relative' >

                </div>
            </div>
        </div>
    )
}

export default Page