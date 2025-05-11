import React from 'react'
import Markdown from 'react-markdown'

function SummeryBox({ summery }) {
    return (
        <div className='h-[60vh] overflow-auto'>
            <Markdown ClassName='text-base/8'>{summery}</Markdown>
        </div>
    )
}

export default SummeryBox