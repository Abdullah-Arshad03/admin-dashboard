import React from 'react'
import style from './footer.module.css'

const Footer = () => {
  return (
    <div>
        <div className ={style.container} >
            <div className={style.name}>Abdullah Bin Arshad</div>
            <div className={style.footer}>&copy; All rights are reserved</div>
   
        </div>
    </div>
  )
}

export default Footer