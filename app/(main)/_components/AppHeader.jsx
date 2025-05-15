import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'

function AppHeader() {
  return (
    <div className='p-3 shadow-sm flex justify-between'>
        <Image src={'/logo2.png'} alt='logo' width={200} height={120} />
      <UserButton />
    </div>
  )
}

export default AppHeader