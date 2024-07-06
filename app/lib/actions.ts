"use server";

import { revalidatePath } from "next/cache";
import { User } from "./userModel";
import { connection } from "./util";
import { redirect } from "next/navigation";
import * as bcrypt from "bcrypt";
import { Product } from "./productModel";
// import { User } from "next-auth";



export const addUser = async (formData: FormData): Promise<void> => {
 const userInfo = {
  username : formData.get('username'),
  email : formData.get('email'),
  password : formData.get('password'),
  phone : formData.get('phone'),
  address : formData.get('address'),
  isAdmin : formData.get('isAdmin'),
  isActive : formData.get('isActive')
 }

  try {
    await connection();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userInfo.password, salt);
    const users = await User.create({
      username: userInfo.username,
      email: userInfo.email,
      password: hashedPassword,
      phone: userInfo.phone,
      address: userInfo.address,
      isAdmin: userInfo.isAdmin,
      isActive: userInfo.isActive,
    });

    await users.save();
  } catch (error) {
    console.log("the users arent save using server action: ", error);
    throw error;
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData: FormData): Promise<void> => {
  const { title, price, color, category, stock, size, description } =
    Object.fromEntries(formData);

  try {
    connection();
    const product = await Product.create({
      title: title,
      price: price,
      color: color,
      category: category,
      stock: stock,
      size: size,
      description: description,
    });

    await product.save();
  } catch (error) {
    console.log("product aint created using the server actions", error);
    throw error;
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};


export const updateUser = async (formData: FormData): Promise<void> => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    const updatedFields: { [key: string]: any } = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updatedFields).forEach((key) => {
      if (updatedFields[key] === "" || updatedFields[key] === undefined) {
        delete updatedFields[key];
      }
    });

    if (!id) {
      throw new Error("User ID  required");
    }

    await User.findByIdAndUpdate(id, updatedFields);
  } catch (error) {
    console.error("Error updating user:", error);
  }

  revalidatePath(`/dashboard/users/${id}`);
  redirect(`/dashboard/users/`);
};

export const updateProd = async (formData: FormData): Promise<void> => {
  const { id, title, price, color, category, stock, size, description } =
    Object.fromEntries(formData);

  try {
    connection();
    const updatedFields: { [key: string]: any } = {
      title,
      price,
      color,
      category,
      stock,
      size,
      description,
    };

    Object.keys(updatedFields).forEach((key) => {
      if (updatedFields[key] === "" || updatedFields[key] === undefined) {
        delete updatedFields[key];
      }
    });

    if (!id) {
      throw new Error("User ID is required");
    }

    const updatedONe = await Product.findByIdAndUpdate(id, updatedFields);
    console.log("updated prod : ", updatedONe);
  } catch (error) {
    console.error("Error updating user:", error);
  }

  revalidatePath(`/dashboard/products/${id}`);
  redirect(`/dashboard/products/`);
};
