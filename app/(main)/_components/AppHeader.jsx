import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AppHeader() {
  return (
    <div className='p-3 shadow-sm flex justify-between'>
      <Link href={'http://localhost:3000/'}>
        <Image src={'/logo2.png'} alt='logo' width={200} height={120} />
      </Link>
      <UserButton />
    </div>
  )
}

export default AppHeader