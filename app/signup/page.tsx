import React from 'react'
import style from '@/app/ui/dashboard/users/addUser/addUser.module.css'

const SignUpPage = () => {
  return (
    <>

<form  className={style.form}>
        <input className={style.input}
          type="text"
          placeholder="username"
          id="username"
          name="username"
        />
        <input className={style.input} type="email" placeholder="email" id="email" name="email" />
        <input
          className={style.input}
          type="password"
          placeholder="password"
          id="password"
          name="password"
        />
        <input className={style.input} type="number" placeholder="phone" id="phone" name="phone" />

        <select className={style.input} name="isAdmin" id="isAdmin">
          <option value="general">isAdmin?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select className={style.input} name="isActive" id="isActive">
          <option value="general">isActive?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <input name="address" id="address" placeholder="Address"   className={style.input}></input>
        <button type='submit' className={style.submit}>Submit</button>
      </form>

    </>
  )
}

export default SignUpPage