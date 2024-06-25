import React from 'react'
import style from './card.module.css'
import {MdSupervisedUserCircle} from 'react-icons/md'

const Card = () => {
  return (
    <div className={style.container}>
        <MdSupervisedUserCircle/>
        <div className={style.texts}>
            <span className={style.title}>Total User</span>
            <span className={style.number}>10.273</span>
            <span className={style.details}><span className={style.positive}>12%</span> more than previous week</span>

            {/* <span></span> */}
        </div>
         
    </div>
  )
}

export default Card