import moment from "moment";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res=>res.json())
        .then(data=>setCategories(data.data))
    },[])
  return (
    <div className="my-3 w-11/12 mx-auto p-4 bg-base-200 flex items-center gap-2">
      <h2 className="p-2 px-4 bg-[#D72050] text-white text-lg font-medium">News</h2>

      <Marquee pauseOnHover ='true' speed={80}>
        {
            categories.map((category,index)=><p key={index}>{category.title}</p>)
        }
      </Marquee>
    </div>
  );
};

export default Marque;
