import React from "react";
import style from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import { Product } from "@/app/lib/productModel";
import { updateProd } from "@/app/lib/actions";

interface Props {
  params: {
    id: number;
  };
}

const SingleProductPage = async ({ params: { id } }: Props) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new Error("product not found");
  }

  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.imgContainer}>
          <Image
            src={product.img || "/noavatar.png"}
            alt="userImage"
            fill
          ></Image>
        </div>
        {product.title}
      </div>

      <div className={style.userInfo}>
        <form action={updateProd} className={style.form}>
          <input type="hidden" name="id" value={product._id} />
          <label>Title</label>
          <input
            className={style.input}
            type="text"
            placeholder={product.title}
            name="title"
          />
          <label>Price</label>
          <input
            className={style.input}
            type="number"
            placeholder={product.price}
            name="price"
          />
          <label>Color</label>
          <input
            className={style.input}
            type="text"
            placeholder={product.color}
            name="color"
          />
          <label>Choose a category</label>

          <select className={style.input} name="category" id="category">
            <option value="general">Select one</option>

            <option value="kitchen">kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label>Stock</label>
          <input
            className={style.input}
            type="number"
            placeholder={product.stock}
            name="stock"
          />
          <label>Size</label>

          <input
            className={style.input}
            type="text"
            placeholder={product.size}
            name="size"
          />
          <label>Description</label>

          <input
            className={style.input}
            type="text"
            placeholder={product.description}
            name="description"
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
