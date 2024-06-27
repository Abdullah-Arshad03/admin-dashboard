import React from 'react'
import style from './pagination.module.css'

const pagination = () => {
  return (
    <div className={style.container}>
      <button className={style.previous} disabled> Previous</button>
      <button className={style.next}>Next</button>


    </div>
  )
}

export default pagination