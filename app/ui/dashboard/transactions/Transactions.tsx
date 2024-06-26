import React from "react";
import style from "./transactions.module.css";
import Image from "next/image";
import { Status } from "@/app/utils/status";

const users: {
  Name: string;
  Status: Status;
  Date: string;
  Amount: number;
  Image: string;
}[] = [
  {
    Name: "Zubair",
    Status: Status.Done,
    Date: "25.06.2024",
    Amount: 3.2,
    Image: "/noavatar.png",
  },
  {
    Name: "Asim",
    Status: Status.Pending,
    Date: "25.06.2024",
    Amount: 3.2,
    Image: "/noavatar.png",
  },
  {
    Name: "Ali",
    Status: Status.Cancelled,
    Date: "25.06.2024",
    Amount: 3.2,
    Image: "/noavatar.png",
  },
  {
    Name: "Amna",
    Status: Status.Done,
    Date: "25.06.2024",
    Amount: 3.2,
    Image: "/noavatar.png",
  },
];

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
          {users.map((user) => (
            <tr key={user.Name}>
              <td>
                {" "}
                <div className={style.user}>
                  {" "}
                  <Image
                    src={user.Image}
                    alt={user.Name}
                    width={40}
                    height={40}
                    className={style.userImage}
                  />{" "}
                  {user.Name}{" "}
                </div>
              </td>
              <td>
                <span
                  className={`${style.status} ${
                    user.Status === `${Status.Pending}`
                      ? style.pending
                      : user.Status === "done"
                      ? style.done
                      : user.Status === `${Status.Cancelled}`
                      ? style.cancelled
                      : ""
                  }`}
                >
                  {user.Status}
                </span>
              </td>
              <td>{user.Date}</td>
              <td>${user.Amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
