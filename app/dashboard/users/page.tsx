import React from 'react'
import style from './users.module.css'
import Search from '@/app/ui/dashboard/search/Search'
import { Actions } from '@/app/utils/action'
import Image from 'next/image'
import Link from 'next/link'
import Pagination from '../../ui/dashboard/pagination/Pagination'
import { fetchUsers } from '@/app/lib/data'


const Admin = 'admin'
const client = 'client'
const active = 'active'
const nonActive = 'offline'

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


interface Props {
  searchParams : {
    q : string, 
    page : number

  }
}
const UsersPage = async ({searchParams : {q , page}} : Props) => {


const userss = await fetchUsers(q , page)

const {count , users} = userss


  
  return (
    <div className={style.container}>
      <div className={style.search}>
        <Search placeholder='Search Users...'/>
        <div className={style.newUser}>
          <Link href='/dashboard/users/add'> <button className={style.newUserBtn}>Add New</button></Link>
        </div>
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
          {users.map((user) => (
            <tr key={user.Name}>
              <td>
              {" "}
                <div className={style.user}>
                  {" "}
                  <Image
                    src={user.img || '/noavatar.png'}
                    alt={user.username}
                    width={40}
                    height={40}
                    className={style.userImage}
                  />{" "}
                  {user.username}{" "}
                </div>
              </td>
              <td>
                {user.email}
              </td>
              <td>{user.createdAt?.toString().slice(4,16)}</td>
              <td>{user.isAdmin? Admin : client}</td>
              <td>{user.isActive? active : nonActive}</td>
              <div className={style.btn}>
              <td> <Link href={`/dashboard/users/${user._id}`}> <button className={style.viewBtn}>view</button> </Link></td>
              <td><button className={style.deleteBtn}>delete</button></td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
        <Pagination count={count}/>

      </div>
    </div>
  )
}

export default UsersPage