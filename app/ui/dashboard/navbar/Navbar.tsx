'use client'

import React from 'react'
import style from './navbar.module.css'
import { MdNotifications , MdOutlineChat , MdPublic , MdSearch} from 'react-icons/md'
import { usePathname } from 'next/navigation'

const Navbar = () => {

  const currentPath = usePathname()
  console.log('on nav', currentPath)

  return (
    <div className={style.container}>
      <div className={style.title}>
        {currentPath.split('/').pop()}
      </div>
      <div className={style.menu}>
        <div className={style.search}>
            <MdSearch/>
            <input type="text" placeholder='Search...' className={style.input} />
        </div>
        <div className={style.icons}>
          <MdOutlineChat size={20}/>
         <MdNotifications size={20}/>
         <MdPublic size={20}/>
        </div>

      </div>

    </div>
  )
}

export default Navbar