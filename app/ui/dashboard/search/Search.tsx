import React from 'react'
import style from './search.module.css'
import { MdSearch } from 'react-icons/md'


interface Props{
    placeholder : string
}
const Search = ({placeholder} : Props) => {
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