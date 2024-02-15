import SWC from './images 1.png'
import IITG from './IITG_White 3.png'
import Bookmarkimg1 from './Vector (10).svg'
import Bookmarkedimg1 from './Vector (11).png'
import Bookmarkimg2 from './Vector (1).png'
import Bookmarkedimg2 from './Vector (5).png'
import React,{useState} from 'react'
import darkMode from './App'





const Navbar = ({ onIconClick }) => {
  

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    
    const [showNewComponent, setShowNewComponent] = useState(false);





const handleClick = () => {
    


}












   
    return ( <div class="w-full h-24 flex flex-row justify-between items-center "  >
<div class="w-64 h-full flex flex-row justify-around items-center">
    
<img src={SWC} class="w-24 h-25">
</img>

<img src={IITG} class="w-20 h-20">
</img>
</div>

<div class="w-36 h-1/3 flex flex-row justify-around items-center ">
    <a href="">
   <p class="font-semibold text-3xl text-secondarycolor hover:text-green dark:text-primarycolor dark:hover:text-white">
    Login
    </p>
    </a>
    <button onClick={toggleVisibility}>
   <button onClick={onIconClick} >


    {!isVisible && (
   <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="32"
    class="fill-green dark:fill-white"
>
    <path d="M0 0 C7.59 0 15.18 0 23 0 C23 10.56 23 21.12 23 32 C17.85191212 30.97038242 15.37079462 29.65675751 11 27 C10.45730469 27.3609375 9.91460937 27.721875 9.35546875 28.09375 C8.28232422 28.78984375 8.28232422 28.78984375 7.1875 29.5 C6.47980469 29.9640625 5.77210937 30.428125 5.04296875 30.90625 C3 32 3 32 0 32 C0 21.44 0 10.88 0 0 Z M3 3 C3 8.28 3 13.56 3 19 C4.65 18.34 6.3 17.68 8 17 C10.375 16.125 10.375 16.125 13 16 C16.465 17.98 16.465 17.98 20 20 C20 14.39 20 8.78 20 3 C14.39 3 8.78 3 3 3 Z M6.3125 21.3125 C5.68988281 21.74175781 5.06726563 22.17101562 4.42578125 22.61328125 C3.95527344 23.07089844 3.48476562 23.52851563 3 24 C3 24.99 3 25.98 3 27 C6.24983135 25.91215032 6.24983135 25.91215032 9 24 C12.12493154 23.66216956 13.55825882 23.69709176 16.1875 25.5 C17.0846875 26.2425 17.0846875 26.2425 18 27 C18.66 27 19.32 27 20 27 C19.95231597 25.12119128 19.95231597 25.12119128 19 23 C14.20970522 19.25107365 11.46771779 17.64872886 6.3125 21.3125 Z "  transform="translate(1,0)"/>
</svg>
    )


    }

    {isVisible && (
   <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="32"
    class="fill-secondarycolor dark:fill-primarycolor"
>
    <path d="M0 0 C7.59 0 15.18 0 23 0 C23 10.56 23 21.12 23 32 C17.85191212 30.97038242 15.37079462 29.65675751 11 27 C10.45730469 27.3609375 9.91460937 27.721875 9.35546875 28.09375 C8.28232422 28.78984375 8.28232422 28.78984375 7.1875 29.5 C6.47980469 29.9640625 5.77210937 30.428125 5.04296875 30.90625 C3 32 3 32 0 32 C0 21.44 0 10.88 0 0 Z M3 3 C3 8.28 3 13.56 3 19 C4.65 18.34 6.3 17.68 8 17 C10.375 16.125 10.375 16.125 13 16 C16.465 17.98 16.465 17.98 20 20 C20 14.39 20 8.78 20 3 C14.39 3 8.78 3 3 3 Z M6.3125 21.3125 C5.68988281 21.74175781 5.06726563 22.17101562 4.42578125 22.61328125 C3.95527344 23.07089844 3.48476562 23.52851563 3 24 C3 24.99 3 25.98 3 27 C6.24983135 25.91215032 6.24983135 25.91215032 9 24 C12.12493154 23.66216956 13.55825882 23.69709176 16.1875 25.5 C17.0846875 26.2425 17.0846875 26.2425 18 27 C18.66 27 19.32 27 20 27 C19.95231597 25.12119128 19.95231597 25.12119128 19 23 C14.20970522 19.25107365 11.46771779 17.64872886 6.3125 21.3125 Z "  transform="translate(1,0)"/>
</svg>
    )}
    </button> 
</button>
   
  
    
</div>
    </div>
     )
    }


 
export default Navbar;