import React, { ReactNode } from "react";
import style from "./sidebar.module.css";
import {
  MdSupervisedUserCircle,
  MdDashboard,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSearch,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./MenuLink/MenuLink";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";


const menuItems : {title : string , list : {title : string , path : string , icon : ReactNode}[]}[]  = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async() => {

  
  const session = await getServerSession(authOptions)
  console.log('this is the session in the dashboard page', session)

  return (
    <div className={style.container}>
      <div className={style.user}>
        <Image className={style.userImage} src={session?.user?.image || '/noavatar.png'} alt="" width="50" height="50"></Image>
        <div className={style.userDetail}>

       {session &&      <span className={style.username}>  {session.user?.name || session.user.email} </span> }
       {!session &&      <span className={style.username}>No User</span> }


   
        <span className={style.userTitle}>Administrator</span>
      </div>
    </div>
      <ul className={style.list}>
        {menuItems.map((category) => (
          <li key={category.title}>
            <span className={style.category}>{category.title}</span>
            {category.list.map((item) => (
              <MenuLink key={item.title} items={item}></MenuLink>
            ))}
          </li>
        ))}
      </ul>
      <button className={style.logout}>
        <MdLogout/>
      {session && <Link href='/api/auth/signout'>Logout</Link>}
      </button>
    </div>
  );
};

export default Sidebar;
