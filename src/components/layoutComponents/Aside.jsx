import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Aside = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category))
    },[])

  return (
    <div>
      <h3 className='text-xl font-semibold my-3'>All Category</h3>
      <div className='flex flex-col gap-3'>
        {
            categories.map(category=> 
            <NavLink
            to={`/category/${category.category_id}`}
            className={'btn btn-neutral'}
             key={category.category_id}>
                {category.category_name}
            </NavLink>)
        }
      </div>
    </div>
  )
}

export default Aside
