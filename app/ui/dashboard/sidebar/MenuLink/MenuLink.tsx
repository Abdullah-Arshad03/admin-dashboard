'use client'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import style from './menuLink.module.css'
import { usePathname } from 'next/navigation' // this is the hook from the next navigation, it gives the current path, the current url basically 

// NOTE: the usePathname is only work with the client components 




interface Props {
    items : {
        title : string
        path : string
        icon : ReactNode
    },

}


const MenuLink = ({items} : Props) => {

  const currentPath = usePathname()
console.log(currentPath)

  return (
   <Link href={items.path} className={`${style.container} ${currentPath === items.path ? style.active : ''}`}>{items.icon} {items.title}</Link>
  )
}

export default MenuLink