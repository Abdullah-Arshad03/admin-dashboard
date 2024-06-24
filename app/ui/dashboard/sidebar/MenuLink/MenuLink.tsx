import Link from 'next/link'
import React, { ReactNode } from 'react'
import style from './menuLink.module.css'

interface Props {
    items : {
        title : string
        path : string
        icon : ReactNode
    },

}

const MenuLink = ({items} : Props) => {
  return (
   <Link href={items.path} className={style.container}>{items.icon} {items.title}</Link>
  )
}

export default MenuLink