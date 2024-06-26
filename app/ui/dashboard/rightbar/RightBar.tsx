import React from 'react'
import style from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'


const RightBar = () => {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <div className={style.bgContainer}>
          <Image src='/astronaut.png' alt='astronaut' fill className={style.bgImage} /> 
          {/* this fill will fill this image inside the container  */}
        </div>
        <div className={style.texts}>
          <span className={style.notification}>
          🔥 Available Now !
          </span>

          <h3 className={style.title}>How to use the new version of the admin dashboard?</h3>

          <span className={style.subTitle}>Take 4 minutes to learn!</span>

          <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit ab a quasi.</p>

          <button className={style.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>

        </div>

      </div>


      <div className={style.item}>
        <div className={style.texts}>
          <span className={style.notification}>
          🚀 Coming Soon !
          </span>

          <h3 className={style.title}>How to use the new version of the admin dashboard?</h3>

          <span className={style.subTitle}>Take 4 minutes to learn!</span>
 
          <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit ab a quasi.</p>

          <button className={style.button}>
            <MdPlayCircleFilled/>
            Learn
          </button>

        </div>

      </div>

    </div>

  )
}

export default RightBar