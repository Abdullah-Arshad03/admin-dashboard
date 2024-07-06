import React, { ReactNode } from 'react'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'
import Navbar from '../ui/dashboard/navbar/Navbar'
import style from './dashboard.module.css'


interface Props {
    children : ReactNode
}

const DashboardLayout = ({children} : Props) => {
  return (
  <div className={style.container}>
  <div className={style.menu}>
    <Sidbar/>
  </div>
  <div className={style.content}>
    <Navbar/>
    {children}
  </div>
  </div>
 
  )
}

export default DashboardLayout