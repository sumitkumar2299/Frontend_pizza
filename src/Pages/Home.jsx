import React, { useEffect } from "react";
import pizza from '../assets/Images/pizza.png'
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from "../Redux/Slices/ProductSlice";
import { Link } from "react-router-dom";


export default function HomePage() {
  const dispatch = useDispatch();
  const {productsData} = useSelector((state)=>state.product);
  useEffect(()=>{
    // this will call when the function mounts 
    dispatch(getAllProducts());

  },[])
  // console.log(import.meta.env);
    return (
      <Layout>
      <div className="min-h-[70vh] bg-gradient-to-br from-yellow-100 via-red-100 to-pink-100 p-6">
        
  
        <section className="flex flex-col md:flex-row items-center justify-between mt-10 gap-10">
          <div className="max-w-lg">
            <h2 className="text-5xl font-bold text-red-700 mb-6 leading-tight">
              Delicious, Hot & Fresh<br /> Pizza Delivered Fast!
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Experience the taste of authentic Italian pizza, made with the freshest ingredients and a whole lot of love.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-3 px-6 rounded-2xl transition-all shadow-lg cursor-pointer">
              Order Now
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={pizza}
              alt="Pizza"
              className="rounded-3xl shadow-lg w-full object-cover"
            />
          </div>
        </section>
      </div>

      <div className="mx-auto">
                 <div className="flex flex-wrap justify-center">
                     {productsData.map((item) => {
                         return (
                             item.inStock && (
                                 <div className="p-4 md:w-1/3" key={item._id}>
                                     <Link to={`/product/${item._id}`}>
                                         <div className="overflow-hidden border rounded-lg border-opacity-60">
                                             <img 
                                                 src={item.productImage}
                                                 alt="Pizza Image"
                                                 className="object-cover object-center w-full lg:h-48 md:h-36"
                                             />
                                             <div className="p-6 border">
                                                 <h2 className="text-xs font-medium tracking-widest text-gray-400 title-font">
                                                     {item.category}
                                                 </h2>
                                                 <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                                                     {item.productName}
                                                 </h1>
                                                 <p className="mb-4 text-base leading-relaxed">
                                                     {item.description}
                                                 </p>
                                                 <p className="text-lg font-medium text-gray-900 title-font">
                                                     ${item.price}
                                                 </p>
                                             </div>
                                         </div>
                                     </Link>
                                 </div>
                             )
                         )
                     })}
                 </div>
             </div>
 

     
      </Layout>
    );
  }
  

