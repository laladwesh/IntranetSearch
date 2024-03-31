import React,{useState} from "react";
import img1 from "../images_2/swc.svg"
import img2 from "../images_2/iitg.svg"
const Header=({ onSearch })=>{
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);
    onSearch(inputText);
  };
    return(
      
        <div class="flex h-20 w-full  items-center justify-evenly mt-4 pl-2 pr-2">

        <div class="w-44 h-32 flex flex-row justify-between items-center">

            <img src={img1} class="w-20 h-20">
            </img>

            <img src={img2} class="w-20 h-20">
            </img>
        </div>


        

        <div class="w-6/12 mr-2 sm:w-7/12 h- rounded-2xl flex flex-row items-center relative border-none ">
          <a class="z-10" href="">
            <svg xmlns="http://www.w3.org/2000/svg " width="35" height="35" viewBox="0 0 24 24" class="fill-secondarycolor dark:fill-primarycolor z-10"><path d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989q-.975.35-1.96.35q-2.402 0-4.066-1.663q-1.664-1.664-1.664-4.065T5.47 5.436q1.663-1.667 4.064-1.667q2.402 0 4.068 1.664q1.666 1.664 1.666 4.067q0 1.042-.369 2.017q-.37.975-.97 1.668l6.262 6.261zM9.538 14.23q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37" /></svg>


          </a>
          <label >

          </label>
          <input placeholder="Search" type="text" class="w-full h-14 rounded-2xl pl-12 absolute text-2xl placeholder-secondarycolor dark:placeholder-primarycolor text-secondarycolor dark:text-primarycolor  outline-none  bg-primarycolor dark:bg-secondarycolor border-2 focus:border-none " onChange={handleInputChange}>

          </input>
        </div>


        <h3 class="font-bold text-xl xsm:text-2xl w-1/12 h-auto hover:cursor-pointer">d.aditya</h3>


      </div>
    )
}
export default Header;