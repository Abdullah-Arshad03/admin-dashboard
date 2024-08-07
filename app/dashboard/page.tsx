import React from 'react'
import style from './dashboard.module.css'
import Card from '../ui/dashboard/card/Card'
import RightBar from '../ui/dashboard/rightbar/RightBar'
import Transactions from '../ui/dashboard/transactions/Transactions'
import Chart from '../ui/dashboard/chart/Chart'
// import { AuthOptions } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'


const Dashboard = () => {
  return (<>
    <div className={style.wrapper}>
      <div className={style.main}>

      <div className={style.cards}>
        <Card/>
        <Card/>
        <Card/>
      </div>

      <div className={style.transactions}>
        <Transactions/>
      </div>

      <div className={style.chart}>
         <Chart/> 
      </div>
      

      </div>

      <div className={style.side}>
    <RightBar/>
      </div>

    </div>

    </>
  )
}

export default Dashboard