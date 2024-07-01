'use client'
import React from 'react'
import style from './pagination.module.css'
import { useSearchParams ,  useRouter , usePathname } from 'next/navigation'


interface Props {
  count : number
}

const Pagination = ( { count } : Props) => {

  const pathname = usePathname()
  const {replace} = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const router = useRouter()


  const page  = params.get('page') || 1

  const ITEMS_PER_PAGE = 2
  const hasPrevious =  ITEMS_PER_PAGE * (Number(page) - 1) > 0
  const hasNext = ITEMS_PER_PAGE * (Number(page) - 1) + ITEMS_PER_PAGE < count

  const previousHandler = (type : string) =>{
    if(type === 'prev'){
    params.set('page', (Number(page) - 1).toString());
  }
  else{
    params.set('page', (Number(page) + 1).toString());

  }
    router.replace(`${pathname}?${params}`);
    
  }

  const nextHandler = (type : string) =>{
    if(type === 'next'){
    params.set('page', (Number(page) + 1).toString());
  }
  else{
    params.set('page', (Number(page) - 1).toString());

  }
    router.replace(`${pathname}?${params}`);
    
  }
  return (
    <div className={style.container}>
      <button className={style.previous} disabled={!hasPrevious} onClick={()=> previousHandler('prev')
        
      }> Previous</button>
      <button className={style.next} disabled={!hasNext} onClick={()=> nextHandler('next')}>Next</button>


    </div>
  )
}

export default Pagination