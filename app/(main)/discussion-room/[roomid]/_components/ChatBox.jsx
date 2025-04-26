
import React from 'react'

function ChatBox({conversation}) {
    return (
        <div>
            <div className='h-[60vh] bg-secondary border rounded-xl flex flex-col relative p-4 overflow-auto scrollbar-hide'>
                    {conversation.map((item, index) => (
                        <div className={`flex ${item.role=='user' && 'justify-end'}`}>
                            <h2>
                                {   item?.role == 'assistant' 
                                    ? <h2 className='p-1 px-2 bg-primary mt-2 text-white inline-block rounded-md'> {item?.content} </h2>
                                    : <h2 className='p-1 px-2 bg-gray-200 mt-2 inline-block rounded-md justify-end'> {item?.content} </h2>
                                }
                            </h2>
                        </div>
                    ))}
            </div>
            <h2 className='mt-4 text-gray-400 text-sm'> At the end of your conversion we will automatically generate feedback from your conversation </h2>
        </div>
    )
}

export default ChatBox