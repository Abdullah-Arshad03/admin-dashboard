import React from 'react'
import style from './sidebar.module.css'
import { MdSupervisedUserCircle , MdDashboard , MdShoppingBag , MdAttachMoney, MdWork, MdAnalytics, MdPeople, MdOutlineSearch, MdOutlineSettings, MdHelpCenter} from 'react-icons/md'
import MenuLink from './MenuLink/MenuLink'

const menuItems = [
    {
        title : 'Pages',
        list : [
            {
                title : 'Dashboard',
                path : '/dashboard',
                icon : <MdDashboard/>
            },
            {
                title : 'Users',
                path : '/dashboard/users',
                icon : <MdSupervisedUserCircle/>
            },
            {
                title : 'Products',
                path : '/dashboard/products',
                icon : <MdShoppingBag/>
            },
            {
                title : 'Transactions',
                path : '/dashboard/transactions',
                icon : <MdAttachMoney/>
            }
        ]
    },
    {
        title : 'Analytics',
        list: [
            {
                title : 'Revenue',
                path : '/dashboard/revenue',
                icon : <MdWork/>
            }, 
            {
                title : 'Reports',
                path : '/dashboard/reports',
                icon : <MdAnalytics/>
            },
            {
                title : 'Teams',
                path : '/dashboard/teams',
                icon : <MdPeople/>
            }
            
        ]
    },
    {
        title : "User",
        list : [
            {
                title : 'Settings',
                path : '/dashboard/settings',
                icon : <MdOutlineSettings/>
            },
            {
                title : 'Help',
                path : '/dashboard/help',
                icon : <MdHelpCenter/ >
            }
        ]
    }
]

const Sidebar = () => {
  return (
    <div className={style.container}>
        <ul>
        {menuItems.map((category)=>(
        <li key={category.title}>
            <span>{category.title}</span>
            {category.list.map((item)=>(
                <MenuLink key={item.title} items={item}></MenuLink>
            ))}
        </li>

    ))}

        </ul>
        
        </div>
  )
}

export default Sidebar