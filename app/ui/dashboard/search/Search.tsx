'use client'

import React from 'react'
import style from './search.module.css'
import { MdSearch } from 'react-icons/md'
// import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'
interface Props{
    placeholder : string
}
const Search = ({placeholder} : Props) => {

  // const searchParams = useSearchParams()
  const pathname = usePathname()
  

  console.log(pathname)
  console.log(searchParams)
  return (
    <div className={style.container}>
         <div className={style.search}>
            <MdSearch/>
            <input type="text" placeholder={placeholder} className={style.input} />
        </div>
    </div>
  )
}

export default Search