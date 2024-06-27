import React from 'react'
import style from './products.module.css'
import Search from '@/app/ui/dashboard/search/Search'
import { Actions } from '@/app/utils/action'
import Pagination from '../../ui/dashboard/pagination/Pagination'
import Image from 'next/image'
import Link from 'next/link'

const productsTable : {
  Title : string , 
  Description : string, 
  Price : number, 
  CreatedAt : string,
  Stock : number, 
  viewBtn : string,
  deleteBtn : string,
  image : string
}[] = [
  {
    Title : 'Iphone',
    Description: 'This is the Description of the product',
    Price : 123,
    CreatedAt : '26.06.2024',
    Stock : 34,
    viewBtn : 'view',
    deleteBtn : 'delete',
    image : '/noavatar.png'

  },
  {
    Title : 'Iphone',
    Description: 'This is the Description of the product',
    Price : 123,
    CreatedAt : '26.06.2024',
    Stock : 34,
    viewBtn : 'view',
    deleteBtn : 'delete',
    image : '/noavatar.png'

  },
]

const ProductsPage = () => {
  return (
    <div className={style.container}>
      <div className={style.search}>
        <Search placeholder='Search Products...'/>
        <div className={style.newUser}>
          <Link href='/'> <button className={style.newProdBtn}>Add New</button></Link>
   
        </div>
      </div> 
      <div className={style.users}>
      <table className={style.table}>
        <thead>

          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Stock</td>
          </tr>
        </thead>
        <tbody>
          {productsTable.map((prod) => (
            <tr key={prod.Title}>
              <td>
              {" "}
                <div className={style.prod}>
                  {" "}
                  <Image
                    src={prod.image}
                    alt={prod.Title}
                    width={40}
                    height={40}
                    className={style.prodImage}
                  />{" "}
                  {prod.Title}{" "}
                </div>
              </td>
              <td>
                {prod.Description}
              </td>
              <td>{prod.Price}</td>

              <td>{prod.CreatedAt}</td>
              <td>{prod.Stock}</td>
              <td> <Link href='/'> <button className={style.viewBtn}>{prod.viewBtn}</button> </Link></td>
              <td><button className={style.deleteBtn}>{prod.deleteBtn}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
        <Pagination/>

      </div>
    </div>
  )
}

export default ProductsPage 