import React from 'react'
import style from '@/app/ui/dashboard/users/addUser/addUser.module.css'

const AddUserPage = () => {
  return (
    <div className={style.container}>
        <form action="" className={style.form}>
            <input type="text" placeholder='username' id='username' name='username' />
            <input type="email" placeholder='email' id='email' name='email' />
            <input type="password" placeholder='password' id='password' name='password' />
            <input type="number" placeholder='phone' id='phone' name='phone' />
            <select name="" id="">
            <option value="general" >Admin Or User ?</option>

                <option value="isAdmin" >isAdmin</option>
                <option value="isUser" >isUser</option>
            </select>

        </form>
    </div>
  )

}

export default AddUserPage