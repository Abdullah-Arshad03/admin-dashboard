import React from "react";
import style from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

interface Props {
  params: {
    id: number;
  };
}

const SingleProductPage = ({ params: { id } }: Props) => {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.imgContainer}>
          <Image src="/noavatar.png" alt="userImage" fill></Image>
        </div>
        Abdullah
      </div>

      <div className={style.userInfo}>
        <form className={style.form}>
          <label>Title</label>
          <input
            className={style.input}
            type="text"
            placeholder="Title"
            name="Title"
          />
          <label>Price</label>
          <input
            className={style.input}
            type="number"
            placeholder="Price"
            name="Price"
          />
          <label>Color</label>
          <input
            className={style.input}
            type="text"
            placeholder="Color"
            name="Color"
          />
          <label>Choose a category</label>

          <select className={style.input} name="cat" id="category">
          <option value="general">Select one</option>

            <option value="kitchen">kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label>Stock</label>
          <input
            className={style.input}
            type="number"
            placeholder="Stock"
            name="Stock"
          />
          <label>Size</label>

          <input
            className={style.input}
            type="text"
            placeholder="Size"
            name="Size"
          />
             <label>Description</label>

<input
  className={style.input}
  type="text"
  placeholder="Description"
  name="Description"
/>

         
          <button type="submit" className={style.submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
