import React, {useEffect, useState} from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

const SearchPost = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [filterData, setFilterData] = useState({
        title: '',
        tag: '',
        category: '',
    });

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilterData({ ...filterData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(filterData);
    };

    return (
        <div className="bg-white shadow-md rounded-lg sm:max-w-md mx-auto mb-15 mt-10 flex-col text-sm">
            <button
                onClick={toggleAccordion}
                className="w-full py-3 px-6 bg-gray-800 text-gray-100 font-semibold flex justify-between items-center"
            >
                Filter Post
                <svg
                className={`w-4 h-4 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                >
                <path
                    fillRule="evenodd"
                    d="M9.29289 13.7071C9.68342 14.0976 10.3166 14.0976 10.7071 13.7071L14.7071 9.70711C15.0976 9.31658 15.0976 8.68342 14.7071 8.29289C14.3166 7.90237 13.6834 7.90237 13.2929 8.29289L10 11.5858L6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L9.29289 13.7071Z"
                    clipRule="evenodd"
                ></path>
                </svg>
            </button>
            {isOpen && (
                <form onSubmit={handleSubmit} className="px-6 py-4">
                    <div className='mb-4'>
                        <select 
                            class="border px-4 py-2 mr-2 rounded w-full focus:outline-none focus:border-gray-400"
                            name="media"
                        >
                            <option value="" disabled selected>Media Type</option>
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                            <option value="audio">Audio</option>
                        </select>
                    </div>
                    <div className='mb-4'>
                        <select 
                            class="border px-4 py-2 mr-2 rounded w-full focus:outline-none focus:border-gray-400"
                            name="tier"
                        >
                            <option value="" disabled selected>Tier</option>
                            <option value="">Tier1</option>
                            <option value="">Tier2</option>
                            <option value="">Tier3</option>
                        </select>
                    </div>
                    <div className='mb-4'>
                        <select 
                            class="border px-4 py-2 mr-2 rounded w-full focus:outline-none focus:border-gray-400"
                            name="time-year"
                        >
                            <option value="" disabled selected>Year</option>
                            <option value="">2024</option>
                            <option value="">2023</option>
                            <option value="">2022</option>
                        </select>
                    </div>
                    <div className='mb-4'>
                        <select 
                            class="border px-4 py-2 mr-2 rounded w-full focus:outline-none focus:border-gray-400"
                            name="time-month"
                        >
                            <option value="" disabled selected>Month</option>
                            <option value="">January</option>
                            <option value="">February</option>
                            <option value="">March</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
                        Title
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Enter title..."
                        value={filterData.title}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="tag">
                        Tag
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="tag"
                        name="tag"
                        type="text"
                        placeholder="Enter tag..."
                        value={filterData.tag}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="category">
                        Category
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                        name="category"
                        type="text"
                        placeholder="Enter category..."
                        value={filterData.category}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="flex">
                        <button
                        type="submit"
                        className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                        >
                        Apply Filter
                        </button>
                    </div>
                </form>
            )}
        </div>
        // <div className="sm:max-w-md mx-auto mb-15 mt-10 flex-col">
        //     <div className="flex items-center border border-black px-4 py-2 my-2 rounded w-full focus-within:border-gray-600">
        //         <input
        //             type="text"
        //             className="flex-1 focus:outline-none"
        //             placeholder="Search posts"
        //         />
        //         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer">
        //             <path d="M30 28.431L21.62 20.051C23.6338 17.6334 24.638 14.5325 24.4237 11.3934C24.2094 8.25432 22.7932 5.31868 20.4696 3.19718C18.146 1.07569 15.0939 -0.0683156 11.9483 0.00315823C8.80271 0.074632 5.80577 1.35608 3.58092 3.58092C1.35608 5.80577 0.074632 8.80271 0.00315823 11.9483C-0.0683156 15.0939 1.07569 18.146 3.19718 20.4696C5.31868 22.7932 8.25432 24.2094 11.3934 24.4237C14.5325 24.638 17.6334 23.6338 20.051 21.62L28.431 30L30 28.431ZM2.25896 12.2457C2.25896 10.2705 2.84468 8.3397 3.94204 6.69738C5.0394 5.05507 6.59912 3.77504 8.42396 3.01916C10.2488 2.26329 12.2568 2.06552 14.1941 2.45086C16.1313 2.8362 17.9108 3.78735 19.3075 5.18402C20.7041 6.5807 21.6553 8.36017 22.0406 10.2974C22.426 12.2347 22.2282 14.2427 21.4723 16.0675C20.7164 17.8924 19.4364 19.4521 17.7941 20.5494C16.1518 21.6468 14.2209 22.2325 12.2457 22.2325C9.59798 22.2296 7.05951 21.1765 5.18727 19.3042C3.31502 17.432 2.2619 14.8935 2.25896 12.2457Z" fill="black"/>
        //         </svg>
        //     </div>

        //     <div className="flex items-center border border-black px-4 py-2 my-2 rounded w-full focus-within:border-gray-600">
        //         <input
        //             type="text"
        //             className="flex-1 focus:outline-none"
        //             placeholder="Search post tag"
        //         />
        //         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 cursor-pointer">
        //             <path d="M30 28.431L21.62 20.051C23.6338 17.6334 24.638 14.5325 24.4237 11.3934C24.2094 8.25432 22.7932 5.31868 20.4696 3.19718C18.146 1.07569 15.0939 -0.0683156 11.9483 0.00315823C8.80271 0.074632 5.80577 1.35608 3.58092 3.58092C1.35608 5.80577 0.074632 8.80271 0.00315823 11.9483C-0.0683156 15.0939 1.07569 18.146 3.19718 20.4696C5.31868 22.7932 8.25432 24.2094 11.3934 24.4237C14.5325 24.638 17.6334 23.6338 20.051 21.62L28.431 30L30 28.431ZM2.25896 12.2457C2.25896 10.2705 2.84468 8.3397 3.94204 6.69738C5.0394 5.05507 6.59912 3.77504 8.42396 3.01916C10.2488 2.26329 12.2568 2.06552 14.1941 2.45086C16.1313 2.8362 17.9108 3.78735 19.3075 5.18402C20.7041 6.5807 21.6553 8.36017 22.0406 10.2974C22.426 12.2347 22.2282 14.2427 21.4723 16.0675C20.7164 17.8924 19.4364 19.4521 17.7941 20.5494C16.1518 21.6468 14.2209 22.2325 12.2457 22.2325C9.59798 22.2296 7.05951 21.1765 5.18727 19.3042C3.31502 17.432 2.2619 14.8935 2.25896 12.2457Z" fill="black"/>
        //         </svg>
        //     </div>

        //     <div className=''>
        //         <div className='flex'>
        //             <select 
        //                 class="border border-black px-4 py-2 my-2 mr-2 rounded w-1/3 focus:outline-none focus:border-gray-600"
        //                 name="media"
        //             >
        //                 <option value="">Media Type</option>
        //                 <option value="image">Image</option>
        //                 <option value="video">Video</option>
        //                 <option value="audio">Audio</option>
        //             </select>
        //             <select 
        //                 class="border border-black px-4 py-2 m-2 rounded w-1/3 focus:outline-none focus:border-gray-600"
        //                 name="tier"
        //             >
        //                 <option value="">Tier</option>
        //                 <option value="1">Tier</option>
        //             </select>
        //             <select 
        //                 class="border border-black px-4 py-2 my-2 ml-2 rounded w-1/3 focus:outline-none focus:border-gray-600"
        //                 name="date"
        //             >
        //                 <option value="">Month</option>
        //                 <option value="2024-03-03">Month</option>
        //             </select>
        //         </div>
        //         <div className='flex my-2'>
        //             <div class="flex mr-5">
        //                 <input type="checkbox" id="filter-by-like" name="filter-by-like" class="mr-2 rounded-md focus:ring-blue-500 w-5 h-5" />
        //                 <label for="filter-by-name" class="text-sm">Likes</label>
        //             </div>
        //             <div class="flex mr-5">
        //                 <input type="checkbox" id="filter-by-like" name="filter-by-like" class="mr-2 rounded-md focus:ring-blue-500 w-5 h-5" />
        //                 <label for="filter-by-like" class="text-sm">Likes</label>
        //             </div>
        //         </div>

        //     </div>

        //     <button className="px-5 py-2 bg-black text-white rounded cursor-pointer w-full">
        //         Filter
        //     </button>

        //     {/* <div className="flex items-center border border-black px-4 py-2 my-2 rounded w-full focus-within:border-gray-600">

        //     </div> */}
        // </div>
    );
}

export default SearchPost;