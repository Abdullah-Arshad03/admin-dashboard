import React, { ReactNode } from 'react'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'
import Navbar from '../ui/dashboard/navbar/Navbar'


interface Props {
    children : ReactNode
}

const DashboardLayout = ({children} : Props) => {
  return (<>
  <div>
    <Sidebar/>
  </div>
  <div>
    <Navbar/>
    {children}
  </div>
  </>   
  )
}

export default DashboardLayout