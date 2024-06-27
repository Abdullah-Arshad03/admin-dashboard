import React from "react";
import style from "@/app/ui/dashboard/users/addUser/addUser.module.css";


const AddUserPage = () => {
  return (
    <div className={style.container}>
      <form action="" className={style.form}>
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
          <option value="Admin">Yes</option>
          <option value="notAdmin">No</option>
        </select>
        <select className={style.input} name="isActive" id="isActive">
          <option value="general">isActive?</option>
          <option value="Active">Yes</option>
          <option value="notActive">No</option>
        </select>
        <textarea  name="Address" id="Address" placeholder="Address" rows={16}  className={style.input}></textarea>
        <button type='submit' className={style.submit}>Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
