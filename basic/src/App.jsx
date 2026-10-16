// import { useState, useEffect } from "react";
// import React from "react";
// import "./index.css";
// // import Recipe from "./recipe.jsx";


// function App() {
//   const [loading, setLoader] = useState(true)
//   const [data, setData] = useState([])
//   const [showRecipe, setShowRecipe] = useState(false);
//   const [err, setError]=useState("")
//   const [empty, setEmpty]=useState(true)
//   const [input,setChange]=useState("")
//   useEffect(()=>{
//     const fetchData = async()=>{
//       const res = await fetch(
//         "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
//       );
//       const result = await res.json()

        
//       setChange(name)
//       setError(res.status)
//       setLoader(false)
//       setEmpty(result?.length === 0?true:false)
//       setData(result.meals);
//     }
//     fetchData()
//   },[]);
//   console.log(data,"data")



//   return (
//     loading?<><h1>Page is Loading</h1></>:
//     empty?<><h2>No Data Found</h2></>:
//     err!==200?<><h2>Api is failed</h2></>:
//     <div className="main">
//       <h1>Recipe Finder</h1>
      

//       <div className="container">
//         {data.map((items,key)=>{
//           return(
//             <div className="card" key={key}>
//               <h3><span className="Mealid">Meal Id: </span>{items.idMeal}</h3>
//               <img src={items.strMealThumb} alt={items.strMealThumb} className="img"/>
//               <h2 className="gen"><span className="genre">Recipe Name : </span>{items.strMeal}</h2>

//               {/* <p><span className="genre">Instructions : </span>{items.strInstructions}</p> */}
//               <h3><span className="genre">Category : </span>{items.strCategory}</h3>
//               <h4><span className="genre"> Area : </span>{items.strArea}</h4>
//                {/* <button onClick={() => setSelectedMeal(items.idMeal)}>
//   View Ingredients
// </button> */}
//                {/* <a
//                 href={
//                   items.game_url
//                 }
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 View Recipe
//               </a> */}
//               <a
//                 href={
//                   items.strYoutube
//                 }
//                 target="_blank"
//                 rel="noreferrer"
//               >
//               Youtube Video
//               </a>
//             </div>
              

//           )
//         })}
//       </div>
//     </div>
      
//   )
// }

// export default App
// import react, { useEffect, useState } from 'react';
// import backgroundImage from './assets/image.jpg'
// import Button from './component/UI/button/index.jsx'
// const app=()=>{
//   const [counter,setCounter]=useState(0);
//   // // useEffect(()=>{
//   // //   alert("welcome to sample page")
//   // // },[])
//   // return(
//   //   <body>
//   //     <div className='container'>
//   //     <h1>welcome to the gallery</h1>
//   //     <img src={backgroundImage} alt="new image" className='img' />
//   //     <br />
//   //     <br />
//   //     <Button name={"Hello all"} className='greet' onClick={()=>{alert("hi hello all")
//   //       console.log("hi")
//   //     }} ></Button>
//   //     <br />
//   //     <br />
//   //     <Button name={"decrement"} onClick={()=>setCounter(counter-1)} className='greet'></Button>
//   //      <label>  {counter}  </label>
//   //     <Button name={"increment"} onClick={()=>setCounter(counter+1)} className='greet'></Button>
     
      
//   //   </div>
//   //   </body>
    
//   // )
//   const[data,setData]=useState([]);
//   useEffect(()=>
//   {
//     const fetchdata=async()=>{
//       const res=await fetch('https://jsonplaceholder.typicode.com/users')
//       const data=await res.json();
//       setData(data)
//     }
//     fetchdata();
//   },[])

//   console.log(data,"data")
//   return(
    
//     <div className='main'>
      
//       {data?.map((items,key)=>
//       {
//         return(
          
//           <div className="container" key={key}>
//             <label className='lab'>name : </label>
            
//             <br />
//             <h4>{items.name}</h4>
            
//              <label className='lab'>user name : </label>
//              <br />
//              <h4>{items.username}</h4>
            
//             <label className='lab'>email :</label>
//              <br />

//             <h4>{items.email}</h4>
//             <label className='lab'>phone :</label>
//              <br />

//             <h4>{items.phone}</h4>
//             <label className='lab'>address :</label>
//              <br />

//             <h4>{items.address.street}</h4>
//             <h4>{items.address.suite}</h4>
//             <h4>{items.address.city}</h4>
//             <h4>{items.address.zipcode}</h4>
//             <label className='lab'>website :</label>
//              <br />

//             <h4>{items.website}</h4>
//             <label className='lab'>company :</label>
//              <br />

//             <h4>{items.company.name}</h4>
//             <h4>{items.company.catchPhrase}</h4>
//             <h4>{items.company.bs}</h4>
//           </div>
//         )
//       })}
//     </div>
//   )
// }
// export default app;
// import { useState } from "react";
// import title from './component/UI/titlle/Title.JSX'
// function App()
// {
//   const[count,setcount]=useState(0);
//   return(
//     <>
//     <title count={count}>
//       <button onClick={()=>setcount(count+1)}>
//         click me
//       </button>
//     </title>
//     </>
//   )
// }
// export default App


// import { useState } from "react";
// import Title from "./component/UI/titlle/Title";

// function App() {
//     const [count, setCount] = useState(0);

//     return (
//         <>
//             <Title count={count} />

//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </>
//     );
// }

// export default App;
import React from "react";
import { useState,useEffect } from "react";
function App()
{
     const [form, setForm] = useState({
  firstName: "", email: "", age: "",
});
const [submitted, setSubmitted] = useState(null);
 
  function handle(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted({ ...form });
  }


  return (
    <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={form.firstName}
          onChange={handle}
          placeholder="First name"
        />
        <br /><br />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handle}
          placeholder="Email"
        />
        <br /><br />

        <input
          name="age"
          type="number"
          value={form.age}
          onChange={handle}
          placeholder="Age"
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Submitted values</h3>
        {submitted ? (
          <>
            <p>First name: {submitted.firstName}</p>
            <p>Email: {submitted.email}</p>
            <p>Age: {submitted.age}</p>
          </>
        ) : (
          <p>Submit the form to see the values.</p>
        )}
        </div>
        </div>
)

}
export default App