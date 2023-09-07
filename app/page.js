'use client'
import { useState } from "react";
export default function Home() {

  const [data, setData] = useState([]);

  const dataLoader = async () => {
    let response = await fetch('https://api.github.com/users/naveed-rana/followers');

    response = await response.json();
    setData(response);
    console.log("response", response);
    // console.log("response data", response.data);
  }

  const deleteHandler = (logInName) => {
    let filterDeleteName = data.filter((item) => item.login !== logInName)
    return setData([data, ...filterDeleteName]);
  }

  return (
    <>
      <button
        className=" w-20 h-10 border-2
    border-blue-400
     m-10 rounded-xl
      hover:bg-blue-500
       hover:text-white
        hover:border-black"
        onClick={dataLoader}>
        Loaded
      </button>

      <ul className="m-10">
        {data.map((item, index) => {
          return (
            <li key="index">
              {item.login}
              <br />
              {item.followers_url}
              <button
                className=" w-20 h-10 border-2
           border-blue-400 m-10 
           rounded-xl
            hover:bg-blue-500 
            hover:text-white 
            hover:border-black"
                onClick={() => deleteHandler(item.login)}
              >Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
