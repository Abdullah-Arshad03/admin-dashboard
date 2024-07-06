import React from 'react'
import style from './products.module.css'
import Search from '@/app/ui/dashboard/search/Search'
import Pagination from '../../ui/dashboard/pagination/Pagination'
import Image from 'next/image'
import Link from 'next/link'
import { fetchProducts } from '@/app/lib/data'


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


interface Props {
  searchParams : {
    q : string,
    page : number
  }
}
const ProductsPage = async({searchParams: {q , page}} : Props) => {
  
  const prodData = await fetchProducts(q , page)
  const {count , products} = prodData

  return (
    <div className={style.container}>
      <div className={style.search}>
        <Search placeholder='Search Products...'/>
        <div className={style.newUser}>
          <Link href='/dashboard/products/add'> <button className={style.newProdBtn}>Add New</button></Link>
   
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
          {products.map((prod) => (
            <tr key={prod.title}>
              <td>
              {" "}
                <div className={style.prod}>
                  {" "}
                  <Image
                    src={prod.img || '/noavatar.png'}
                    alt={prod.title}
                    width={40}
                    height={40}
                    className={style.prodImage}
                  />{" "}
                  {prod.title}{" "}
                </div>
              </td>
              <td>
                {prod.description}
              </td>
              <td>{prod.price}</td>
              <td>{prod.stock}</td>
              <div className={style.btns}>
              <td> <Link href={`/dashboard/products/${prod._id}`}> <button className={style.viewBtn}>view</button> </Link></td>
              <td><button className={style.deleteBtn}>delete</button></td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
        <Pagination count={count}/>

      </div>
    </div>
  )
}

export default ProductsPage 