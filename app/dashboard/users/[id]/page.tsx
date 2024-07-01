import React from "react";
import style from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { User } from "@/app/lib/userModel";
import { fetchSingleUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/actions";

interface Props {
  params: {
    id: number;
  };
}

interface User {
  _id : number,
  username : string,
  email : string,
  password : string , 
  phone : number,
  address : string, 
  isAdmin : boolean,
  isActive : boolean,

}
const SingleUserPage = async({ params: { id } }: Props) => {

  const user: User = await fetchSingleUser(id)
  console.log('user agaya : ', user)

  return (
    <div className={style.container}>
        <div className={style.infoContainer}>
      <div className={style.imgContainer}>
        <Image src={ '/noavatar.png'}  alt="userImage" fill></Image>
      </div>
      {user.username}
      </div>

      <div className={style.userInfo}>
        <form action={updateUser}  className={style.form}>
          <input type="hidden" name="id" value={user._id} />
        <label>Username</label>
        <input className={style.input} type="text" placeholder={user.username} name="username"  />
        <label>Email</label>
        <input  className={style.input}  type="Email" placeholder={user.email} name="Email" />
        <label>Password</label>
        <input  className={style.input}  type="Password" placeholder={user.password} name="Password" />
        <label>Phone</label>

        <input  className={style.input}  type="number" placeholder={user.phone.toString()} name="Phone" />
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
