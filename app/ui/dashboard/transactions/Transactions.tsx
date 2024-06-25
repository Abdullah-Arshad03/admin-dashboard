import React from "react";
import style from "./transactions.module.css";
import Image from "next/image";
import { Status } from "@/app/utils/status";


const users:{Name : string , Status : Status , Date : string , Amount : number}[] = [
  {
      Name : 'Zubair', 
      Status : Status.Done,
      Date : '25.06.2024', 
      Amount : 3.200
  },
  {
    Name : 'Asim', 
    Status : Status.Pending,
    Date : '25.06.2024', 
    Amount : 3.200
  },
  {
    Name : 'Ali', 
    Status : Status.Cancelled,
    Date : '25.06.2024', 
    Amount : 3.200
  },  {
    Name : 'Amna', 
    Status : Status.Done,
    Date : '25.06.2024', 
    Amount : 3.200
  },
]

const Transactions = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Latest Transactions</h2>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={style.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={style.userImage}
              />
              Zubair
              </div>
            </td>
            <td>
              <span className={`${style.status}${style.pending}`}>pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={style.userImage}
              />
              Zubair
            </td>
            <td>
              <span className={`${style.status}${style.done}`}>done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>  <tr>
            <td>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={style.userImage}
              />
              Zubair
            </td>
            <td>
              <span className={`${style.status}${style.cancelled}`}>Cancelled</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>  <tr>
            <td>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={style.userImage}
              />
              Zubair
            </td>
            <td>
              <span className={`${style.status}${style.done}`}>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
