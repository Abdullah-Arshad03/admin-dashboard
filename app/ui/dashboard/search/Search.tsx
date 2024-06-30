"use client";

import React from "react";
import style from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  placeholder: string;
}
const Search = ({ placeholder }: Props) => {

  const pathname = usePathname();
  const searchParam = useSearchParams();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParam); // passing this search Param into this URLSearchParam will give us control on the current url, also new URLSearchParams contains a object for the url 

  // now i will take the value from the search input feild and add as query, like q=value

  const searchHandler = (e : {target : {value : string}}) =>{

    params.set('page', '1')

    if (e.target.value){
      params.set('q' , e.target.value)
    }
    else{
      params.delete('q')
    }
    replace(`${pathname}?${params}`)
  }


  return (
    <div className={style.container}>
      <div className={style.search}>
        <MdSearch />
        <input type="text" placeholder={placeholder} className={style.input} onChange={searchHandler}/>
      </div>
    </div>
  );
};

export default Search;
