import React from 'react';
import MainContent from './components/MainContent';
import Mainpic from './images/mainpicture.png';
import { FaMoon, FaSun } from 'react-icons/fa';

const Content = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className="w-3/5 h-4/5 flex flex-col items-center justify-between">
            {/* Header Text */}
            <div className="text-secondarycolor dark:text-primarycolor text-5xl font-open-sans flex font-semibold flex-col items-center w-full gap-0 justify-start">
                <p className="-mb-8">Tired of finding websites online?</p>
                <br />
                <p className="mt-16">We are here to help.</p>
            </div>

            {/* Main Image */}
            <div className="w-full h-4/5 flex flex-col items-center justify-between">
                <div className="w-9/12 h-4/5">
                    <img src={Mainpic} className="w-full object-contain h-full" alt="Main Visual" />
                </div>

                {/* Search Bar */}
                <div className="w-full h-14 rounded-2xl flex flex-row items-center relative border-none">
                    <a className="z-10" href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            className="fill-secondarycolor dark:fill-primarycolor z-10"
                        >
                            <path d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989q-.975.35-1.96.35q-2.402 0-4.066-1.663q-1.664-1.664-1.664-4.065T5.47 5.436q1.663-1.667 4.064-1.667q2.402 0 4.068 1.664q1.666 1.664 1.666 4.067q0 1.042-.369 2.017q-.37.975-.97 1.668l6.262 6.261zM9.538 14.23q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37" />
                        </svg>
                    </a>
                    <input
                        placeholder="Search"
                        type="text"
                        className="w-full h-14 rounded-2xl pl-12 absolute text-2xl placeholder-secondarycolor dark:placeholder-primarycolor text-secondarycolor dark:text-primarycolor outline-none bg-primarycolor dark:bg-secondarycolor border-2 focus:border-none"
                    />
                </div>

                {/* Theme Toggle Button */}
                <div className="absolute top-4 right-4">
                    <button
                        onClick={toggleDarkMode}
                        className={`bg-white w-16 h-8 rounded-full relative flex items-center transition-all ${
                            darkMode ? 'justify-end bg-black' : 'justify-start bg-yellow-400'
                        }`}
                    >
                        <div
                            className={`w-7 h-7 rounded-full flex justify-center items-center ${
                                darkMode ? 'bg-yellow-400' : 'bg-black'
                            } transition-all`}
                        >
                            {darkMode ? <FaSun className="text-black" /> : <FaMoon className="text-white" />}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Content;
