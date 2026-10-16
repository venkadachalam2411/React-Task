import { useState, useEffect } from "react";
import React from "react";
import "./index.css";

 function Recipe() {
  const [data, setData] = useState([])
  useEffect(()=>{
    const fetchRecipe = async()=>{
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
      );
      const result = await res.json()
      
      setData(result.meals || []);
    }
    fetchRecipe()
  },[idMeal]);
  console.log(data,"data")

return(
    <div className="class">
        <h2>Recipe</h2>
        <div className="container">
        {data?.map((items,key)=>{
            return(
                 <div className="card" key={key}>
                    <img src={items.strMealThumb} alt={items.strMealThumb} className="img"/>
                    <h3>Ingridents :</h3>

                    </div>
            )
        })}
        </div>
    </div>
)
}
export default Recipe

