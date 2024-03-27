import React, {useEffect, useState} from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";


const CreatePost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setSelectedVideo(e.target.files[0]);
  };

  const handleAudioChange = (e) => {
    setSelectedAudio(e.target.files[0]);
  };

  return (
    <div className='mt-10'>
      <button
        className="fixed bottom-10 right-10 z-50 flex items-center justify-center transition-all duration-300 hover:scale-110"
        onClick={openModal}>
          <svg width="50" height="50" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80.849 9.3604C80.5922 9.07817 80.2808 8.85095 79.9336 8.69246C79.5865 8.53398 79.2108 8.44752 78.8293 8.43832C78.4478 8.42912 78.0684 8.49736 77.714 8.63893C77.3596 8.7805 77.0376 8.99244 76.7674 9.26197L74.593 11.4258C74.3295 11.6895 74.1814 12.0471 74.1814 12.4199C74.1814 12.7927 74.3295 13.1502 74.593 13.4139L76.5863 15.4038C76.717 15.535 76.8723 15.6392 77.0434 15.7103C77.2144 15.7814 77.3978 15.818 77.583 15.818C77.7682 15.818 77.9516 15.7814 78.1227 15.7103C78.2937 15.6392 78.449 15.535 78.5797 15.4038L80.6996 13.2944C81.7719 12.2239 81.8721 10.4801 80.849 9.3604ZM70.1967 15.8204L38.4647 47.4962C38.2723 47.6878 38.1324 47.9257 38.0586 48.187L36.5908 52.5586C36.5557 52.6773 36.5532 52.8032 36.5836 52.9231C36.6141 53.043 36.6763 53.1525 36.7638 53.24C36.8513 53.3275 36.9608 53.3897 37.0807 53.4202C37.2006 53.4506 37.3265 53.4481 37.4451 53.4129L41.8133 51.9452C42.0746 51.8713 42.3125 51.7315 42.5041 51.5391L74.1799 19.8036C74.473 19.5074 74.6373 19.1075 74.6373 18.6909C74.6373 18.2742 74.473 17.8744 74.1799 17.5782L72.4309 15.8204C72.1343 15.5246 71.7326 15.3586 71.3138 15.3586C70.895 15.3586 70.4933 15.5246 70.1967 15.8204Z" fill="black"/>
            <path d="M67.9113 34.0418L46.4854 55.51C45.6572 56.3401 44.6395 56.9561 43.5199 57.3047L38.9672 58.8287C37.8867 59.1338 36.7444 59.1453 35.658 58.862C34.5716 58.5788 33.5804 58.0109 32.7865 57.217C31.9926 56.4231 31.4248 55.4319 31.1415 54.3455C30.8582 53.2591 30.8697 52.1168 31.1748 51.0363L32.6988 46.4836C33.0464 45.3644 33.6612 44.3466 34.49 43.5182L55.9582 22.0887C56.155 21.8921 56.2891 21.6416 56.3435 21.3688C56.3979 21.0961 56.3702 20.8133 56.2639 20.5563C56.1576 20.2992 55.9774 20.0795 55.7462 19.9249C55.515 19.7702 55.2432 19.6876 54.965 19.6875H18.2812C15.6705 19.6875 13.1667 20.7246 11.3207 22.5707C9.47461 24.4167 8.4375 26.9205 8.4375 29.5312V71.7188C8.4375 74.3295 9.47461 76.8333 11.3207 78.6793C13.1667 80.5254 15.6705 81.5625 18.2812 81.5625H60.4688C63.0795 81.5625 65.5833 80.5254 67.4293 78.6793C69.2754 76.8333 70.3125 74.3295 70.3125 71.7188V35.035C70.3124 34.7568 70.2298 34.485 70.0751 34.2538C69.9205 34.0226 69.7008 33.8424 69.4437 33.7361C69.1867 33.6298 68.9039 33.6021 68.6312 33.6565C68.3584 33.7109 68.1079 33.845 67.9113 34.0418Z" fill="black"/>
          </svg>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-10" onClick={closeModal}>
          <div className="bg-white w-full max-w-[400px] sm:max-w-lg rounded-[20px] shadow-md overflow-hidden lg:max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-transparent bg-gray-800 rounded-[20px] rounded-bl-none rounded-br-none relative h-[70px]">
              <h1 className="font-semibold text-xl text-white mx-auto pl-14">Create Post</h1>
              <button className="text-gray-400 hover:text-gray-600 m-3" onClick={closeModal}>
                <svg width="35" height="35" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 40.77L30 31.77L39 40.77L40.77 39L31.77 30L40.77 21L39 19.23L30 28.23L21 19.23L19.23 21L28.23 30L19.23 39L21 40.77ZM30.0075 52.5C26.8975 52.5 23.9725 51.91 21.2325 50.73C18.4942 49.5483 16.1117 47.945 14.085 45.92C12.0583 43.8967 10.4542 41.5167 9.2725 38.78C8.09083 36.0433 7.5 33.1192 7.5 30.0075C7.5 26.8975 8.09 23.9725 9.27 21.2325C10.4517 18.4942 12.055 16.1117 14.08 14.085C16.1033 12.0583 18.4833 10.4542 21.22 9.2725C23.9567 8.09083 26.8808 7.5 29.9925 7.5C33.1025 7.5 36.0275 8.09 38.7675 9.27C41.5058 10.4517 43.8883 12.055 45.915 14.08C47.9417 16.1033 49.5458 18.4833 50.7275 21.22C51.9092 23.9567 52.5 26.8808 52.5 29.9925C52.5 33.1025 51.91 36.0275 50.73 38.7675C49.5483 41.5058 47.945 43.8883 45.92 45.915C43.8967 47.9417 41.5167 49.5458 38.78 50.7275C36.0433 51.9092 33.1192 52.5 30.0075 52.5ZM30 50C35.5833 50 40.3125 48.0625 44.1875 44.1875C48.0625 40.3125 50 35.5833 50 30C50 24.4167 48.0625 19.6875 44.1875 15.8125C40.3125 11.9375 35.5833 10 30 10C24.4167 10 19.6875 11.9375 15.8125 15.8125C11.9375 19.6875 10 24.4167 10 30C10 35.5833 11.9375 40.3125 15.8125 44.1875C19.6875 48.0625 24.4167 50 30 50Z" fill="gray"/>
                </svg>
              </button>
            </div>

            <div className='px-10 py-2'>
              <div className='flex my-5'>
                  <img className="lg:w-20 lg:h-20 rounded-full" style={{ width: '65px', height: '65px' }} src="https://picsum.photos/500/500?random" alt="Profile" />
                  <div className='mx-3'>
                    <p className="text-black text-md font-semibold py-1">Profile</p>
                    <select 
                        class="text-sm border border-black px-2 py-1 rounded-xl focus:outline-none focus:border-gray-600"
                        name="media"
                    >
                        <option value="">Tier</option>
                        <option value="tier1">Tier1</option>
                        <option value="tier2">Tier2</option>
                        <option value="tier3">Tier3</option>
                    </select>
                  </div>
              </div>

              <div className="flex flex-col">
                <p className="text-black text-md font-semibold py-1">Title</p>
                <input
                  type="text"
                  className="border border-gray-700 p-2 rounded-[10px] mb-5"
                  placeholder="Add title"
                />
                <p className="text-black text-md font-semibold py-1">Description</p>
                <input
                  type="text"
                  className="border border-gray-700 p-2 rounded-[10px] mb-5"
                  placeholder="Add description"
                />
              </div>
              <div className='flex justify-end mb-5'>
                <label htmlFor="image-upload" className="mr-2">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 18.75V22.5H18.75V25H22.5V28.75H25V25H28.75V22.5H25V18.75H22.5ZM16.625 26.25H6.25C4.875 26.25 3.75 25.125 3.75 23.75V6.25C3.75 4.875 4.875 3.75 6.25 3.75H23.75C25.125 3.75 26.25 4.875 26.25 6.25V16.625C25.5 16.375 24.625 16.25 23.75 16.25C22.375 16.25 21 16.625 19.875 17.375L18.125 15L13.75 20.625L10.625 16.875L6.25 22.5H16.375C16.25 22.875 16.25 23.375 16.25 23.75C16.25 24.625 16.375 25.5 16.625 26.25Z" fill="black"/>
                  </svg>
                </label>
                <input id="image-upload" type="file" accept="image/*" style={{ display: "none" }} />

                <label htmlFor="video-upload" className="mr-2">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='pt-1'>
                    <path d="M13.5 23.5H1.75C1.55109 23.5 1.36032 23.421 1.21967 23.2803C1.07902 23.1397 1 22.9489 1 22.75V1.75C1 1.55109 1.07902 1.36032 1.21967 1.21967C1.36032 1.07902 1.55109 1 1.75 1H22.75C22.9489 1 23.1397 1.07902 23.2803 1.21967C23.421 1.36032 23.5 1.55109 23.5 1.75V13.5M17.25 21H21M21 21H24.75M21 21V17.25M21 21V24.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.6225 7.89104C9.50852 7.82581 9.3794 7.79166 9.24808 7.79199C9.11675 7.79233 8.98781 7.82715 8.87417 7.89296C8.76052 7.95876 8.66614 8.05326 8.60048 8.167C8.53482 8.28073 8.50017 8.40971 8.5 8.54104V15.9573C8.49995 16.0887 8.53444 16.2179 8.60001 16.3318C8.66558 16.4457 8.75994 16.5403 8.87362 16.6063C8.98731 16.6723 9.11633 16.7072 9.24776 16.7076C9.3792 16.708 9.50842 16.6738 9.6225 16.6085L16.11 12.901C16.2248 12.8354 16.3203 12.7407 16.3867 12.6263C16.453 12.5119 16.488 12.382 16.488 12.2498C16.488 12.1175 16.453 11.9877 16.3867 11.8733C16.3203 11.7589 16.2248 11.6641 16.11 11.5985L9.6225 7.89104Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                </label>
                <input id="video-upload" type="file" accept="video/*" style={{ display: "none" }} />

                <label htmlFor="audio-upload">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4375 23.75C14.2292 23.75 14.8958 23.4792 15.4375 22.9375C15.9792 22.3958 16.25 21.7292 16.25 20.9375V16.25H20V13.75H15V18.5938C14.7708 18.4271 14.5262 18.3071 14.2663 18.2338C14.0063 18.1604 13.73 18.1242 13.4375 18.125C12.6458 18.125 11.9792 18.3958 11.4375 18.9375C10.8958 19.4792 10.625 20.1458 10.625 20.9375C10.625 21.7292 10.8958 22.3958 11.4375 22.9375C11.9792 23.4792 12.6458 23.75 13.4375 23.75ZM7.5 27.5C6.8125 27.5 6.22417 27.2554 5.735 26.7663C5.24583 26.2771 5.00083 25.6883 5 25V5C5 4.3125 5.245 3.72417 5.735 3.235C6.225 2.74583 6.81333 2.50083 7.5 2.5H17.5L25 10V25C25 25.6875 24.7554 26.2763 24.2663 26.7663C23.7771 27.2563 23.1883 27.5008 22.5 27.5H7.5ZM16.25 11.25V5H7.5V25H22.5V11.25H16.25Z" fill="black"/>
                  </svg>
                </label>
                <input id="audio-upload" type="file" accept="audio/*" style={{ display: "none" }} />
              </div>


              <div className="flex justify-end text-center">
                <button className="px-5 py-2 bg-gray-800 text-white rounded cursor-pointer">
                  Post
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}


export default CreatePost;