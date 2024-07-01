import style from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import { addProduct } from "@/app/lib/actions";

const AddProductPage = () => {
  return (
    <div className={style.container}>
      <form action={addProduct} className={style.form}>
        <input className={style.input}
         type="text" placeholder="title" name="title" required />
        <select className={style.input} name="category" id="category">
          <option value="general">Choose a Category</option>

          <option  value="kitchen">kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input className={style.input}  type="number" placeholder="price" name="price" />
        <input className={style.input} type="number" placeholder="stock" name="stock" />
        <input className={style.input} type="text" placeholder="color" name="color" />
        <input className={style.input} type="text" placeholder="size" name="size" />
        <textarea
         className={style.input}
          name="description"
          id="description"
          placeholder="Description"
          rows={16}
        ></textarea>
        <button className={style.submit} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
