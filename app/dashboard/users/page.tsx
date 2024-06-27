import React from 'react'
import style from './users.module.css'
import Search from '@/app/ui/dashboard/search/Search'
import { Actions } from '@/app/utils/action'
import Image from 'next/image'
import Link from 'next/link'
import Pagination from '../pagination/Pagination'



const usersTable : {
  Name : string , 
  Email : string , 
  CreatedAt : string, 
  Role : string, 
  Action : Actions, 
  viewBtn : string,
  deleteBtn : string,
  image : string
}[] = [
  {
    Name : 'Abdullah',
    Email : 'aligatorabdullah@gmail.com',
    CreatedAt : '26.06.2024',
    Role : 'client', 
    Action : Actions.Passive,
    viewBtn : 'view',
    deleteBtn : 'delete',
    image : '/noavatar.png'

  },
  {
    Name : 'Noman',
    Email : 'aligatorabdullah@gmail.com',
    CreatedAt : '26.06.2024',
    Role : 'client', 
    Action : Actions.Active,
    viewBtn : 'view',
    deleteBtn : 'delete',
    image : '/noavatar.png'

  }
]
const UsersPage = () => {
  return (
    <div className={style.container}>
      <div className={style.search}>
        <Search placeholder='Search Users...'/>
      </div>
      <div className={style.users}>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>CreatedAt</td>
            <td>Role</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {usersTable.map((user) => (
            <tr key={user.Name}>
              <td>
              {" "}
                <div className={style.user}>
                  {" "}
                  <Image
                    src={user.image}
                    alt={user.Name}
                    width={40}
                    height={40}
                    className={style.userImage}
                  />{" "}
                  {user.Name}{" "}
                </div>
              </td>
              <td>
                {user.Email}
              </td>
              <td>{user.CreatedAt}</td>
              <td>{user.Role}</td>
              <td>{user.Action}</td>
              <td> <Link href='/'> <button className={style.viewBtn}>{user.viewBtn}</button> </Link></td>
              <td><button className={style.deleteBtn}>{user.deleteBtn}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
        <Pagination/>

      </div>
    </div>
  )
}

export default UsersPage