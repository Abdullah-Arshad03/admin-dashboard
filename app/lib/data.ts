import { User } from "./userModel";
import { connection } from "./util";
import { Product } from "./productModel";
import { ProductShape } from "../utils/productInterface";
import { UserShape } from "../utils/userInterface";
interface FetchedUsers {
  count: number;
  users: UserShape[];
}

export const fetchUsers = async (
  q: string,
  page: number
): Promise<FetchedUsers> => {
  connection();

  const ITEMS_PER_PAGE = 2;

  const regex = new RegExp(q, "i");
  try {
    const count = await User.find().countDocuments();
    console.log("total users", count);
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    if (!users) {
      throw new Error("users not found");
    }
    console.log("these are the users ", users);

    return { count, users };
  } catch (error) {
    console.log("error while fetching the users ", error);
    throw error;
  }
};

interface FetchProducts {
    count : number , 
    products : ProductShape[]
}
export const fetchProducts = async(q : string , page : number) : Promise<FetchProducts> =>{

    const regex = new RegExp(q , 'i')

    try {
        const count = await Product.find().countDocuments()
        const products = await Product.find({title : {$regex : regex}}).limit(2).skip(2 * page - 1)
        if(!products){
            throw new Error('products not found')
        }
        return {count , products}
        
    } catch (error) {
        console.log('error while fetching the products',error)
        throw error
    }
    
}


export const fetchSingleUser = async (id: number):Promise<UserShape> =>{

   try {
        const user = await User.findById(id)

        if (!user){
          const error =  new Error('user not founds')
          throw error
        }

        return user

   } catch (error) {
    console.log('single user cant be fetched : ', error)
    throw error
   }

}