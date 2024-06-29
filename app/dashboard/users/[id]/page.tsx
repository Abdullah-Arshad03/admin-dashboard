import React from "react";
import style from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { User } from "@/app/lib/userModel";

interface Props {
  params: {
    id: number;
  };
}
const SingleUserPage = async({ params: { id } }: Props) => {

  const users = await User.findById(id)
  console.log('users agaye', users)

  return (
    <div className={style.container}>
        <div className={style.infoContainer}>
      <div className={style.imgContainer}>
        <Image src="/noavatar.png"  alt="userImage" fill></Image>
      </div>
      Abdullah
      </div>

      <div className={style.userInfo}>
        <form className={style.form}>
        <label>Username</label>
        <input className={style.input} type="text" placeholder="Username" name="username" />
        <label>Email</label>
        <input  className={style.input}  type="Email" placeholder="Email" name="Email" />
        <label>Password</label>
        <input  className={style.input}  type="Password" placeholder="Password" name="Password" />
        <label>Phone</label>

        <input  className={style.input}  type="number" placeholder="Phone" name="Phone" />
        <label>Address</label>

        <input  className={style.input}  type="text" placeholder="Address" name="Address" />
        <label>isAdmin?</label>

        <select  className={style.input}  name="isAdmin" id="isAdmin">
          <option value="isAdmin">Yes</option>
          <option value="notAdmin">No</option>
        </select>

        <label>isActive?</label>
        <select  className={style.input}  name="isActive" id="isActive">
          <option value="isActive">Yes</option>
          <option value="notActive">No</option>
        </select>
        <button type="submit" className={style.submit}>Submit</button>
      </form>

      </div>
    </div>
  );
};

export default SingleUserPage;
