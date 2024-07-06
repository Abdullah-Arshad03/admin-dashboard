import React from "react";
import style from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import { addUser } from "@/app/lib/actions";


const AddUserPage = () => {
  return (
    <div className={style.container}>
      <form action={addUser} className={style.form}>
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
        <textarea  name="address" id="address" placeholder="Address" rows={16}  className={style.input}></textarea>
        <button type='submit' className={style.submit}>Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
