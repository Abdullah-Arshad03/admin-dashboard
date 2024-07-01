import React from "react";
import style from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { User } from "@/app/lib/userModel";
import { fetchSingleUser } from "@/app/lib/data";

interface Props {
  params: {
    id: number;
  };
}
const SingleUserPage = async({ params: { id } }: Props) => {

  const user = await fetchSingleUser(id)
  console.log('user agaya : ', user)

  return (
    <div className={style.container}>
        <div className={style.infoContainer}>
      <div className={style.imgContainer}>
        <Image src={user.img || '/noavatar.png'}  alt="userImage" fill></Image>
      </div>
      Abdullah
      </div>

      <div className={style.userInfo}>
        <form className={style.form}>
        <label>Username</label>
        <input className={style.input} type="text" placeholder={user.username} name="username"  />
        <label>Email</label>
        <input  className={style.input}  type="Email" placeholder={user.email} name="Email" />
        <label>Password</label>
        <input  className={style.input}  type="Password" placeholder="Password" name="Password" />
        <label>Phone</label>

        <input  className={style.input}  type="number" placeholder={user.phone} name="Phone" />
        <label>Address</label>

        <input  className={style.input}  type="text" placeholder={user.address} name="Address" />
        <label>isAdmin?</label>

        <select  className={style.input}  name="isAdmin" id="isAdmin">
          <option value="true" selected= {user.isAdmin}>Yes</option>
          <option value="false" selected={!user.isAdmin}>No</option>
        </select>

        <label>isActive?</label>
        <select  className={style.input}  name="isActive" id="isActive">
          <option value="true" selected={user.isActive}>Yes</option>
          <option value="false" selected = {!user.isActive}>No</option>
        </select>
        <button type="submit" className={style.submit}>Submit</button>
      </form>

      </div>
    </div>
  );
};

export default SingleUserPage;
