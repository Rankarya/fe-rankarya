import React, {useEffect, useState} from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";

const PostCreator = () => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [isOptionModalOpen, setIsOptionModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fileNumber, setFileNumber] = useState(currentSlide + 1);
  const [isEditPostModalOpen, setIsEditPostModalOpen] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleOption = () => {
    setIsOptionModalOpen(true);
  };

  const toggleDelete = () => {
    setIsDeleteModalOpen(true)
  };

  const handleDelete = () => {
    setSuccessAlert(true);
  };

  const closeAlert = () => {
    setSuccessAlert(false);
  };

  const navigate = useNavigate();

  const handleRedirect = () => {
    setIsEditPostModalOpen(false);
    navigate('/editPost');
  };

  const data = [
    {
      id: 1,
      type: 'video',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      alt: 'Video File',
    },
    {
      id: 2,
      type: 'image',
      src: 'https://picsum.photos/1440/1440?random',
      alt: 'Image File',
    },
    {
      id: 3,
      type: 'audio',
      src: 'https://actions.google.com/sounds/v1/crowds/battle_crowd_celebration.ogg',
      alt: 'Audio File',
    },
    // {
    //     id: 4,
    //     type: '',
    //     src: '',
    //     alt: '',
    // },
    // ... more data
  ];

  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % data.length;
    setCurrentSlide(nextSlide);
    setFileNumber(nextSlide + 1);
  };
  
  const handlePrev = () => {
    const prevSlide = currentSlide === 0 ? data.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlide);
    setFileNumber(prevSlide + 1);
  };

  const currentMedia = data[currentSlide];

  return (
    <div className="sm:max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden lg:max-w-3xl m-10">
      <div className="">
        <div className="basis-1/2 relative z-0">
            {currentMedia.type === "image" || currentMedia.type === "video" || currentMedia.type === "audio" ? (
                <>
                    {currentMedia.type === 'video' ? (
                        <video controls src={currentMedia.src} alt={currentMedia.alt}></video>
                    ) : currentMedia.type === 'audio' ? (
                        <div className='flex justify-center items-center my-10'>
                          <img className="lg:w-20 lg:h-20 rounded-[5px] mr-5" style={{ width: '120px', height: '120px' }} src="https://picsum.photos/500/500?random" alt="Profile" />
                          <audio controls className='ml-5' src={currentMedia.src} alt={currentMedia.alt}></audio>
                        </div>
                    ) : currentMedia.type === 'image' ? (
                        <img className="w-full object-cover lg:max-h-[450px]" src={currentMedia.src} alt={currentMedia.alt} />
                    ) : (
                        null
                    )}
                    <div className="absolute top-0 left-0 flex items-center justify-center h-full w-12 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button className="slider-arrow slider-arrow--left" onClick={handlePrev}>
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.8535 4.37615L8.13725 14.3436C7.9666 14.5187 7.87109 14.7535 7.87109 14.998C7.87109 15.2425 7.9666 15.4773 8.13725 15.6524L17.8535 25.6236C17.933 25.7053 18.028 25.7702 18.133 25.8145C18.238 25.8588 18.3508 25.8816 18.4648 25.8816C18.5787 25.8816 18.6915 25.8588 18.7965 25.8145C18.9015 25.7702 18.9965 25.7053 19.076 25.6236C19.2396 25.4562 19.3311 25.2315 19.3311 24.9974C19.3311 24.7633 19.2396 24.5386 19.076 24.3711L9.93913 14.998L19.076 5.62677C19.239 5.45943 19.3302 5.23506 19.3302 5.00146C19.3302 4.76786 19.239 4.54349 19.076 4.37615C18.9965 4.2945 18.9015 4.22961 18.7965 4.1853C18.6915 4.14099 18.5787 4.11816 18.4648 4.11816C18.3508 4.11816 18.238 4.14099 18.133 4.1853C18.028 4.22961 17.933 4.2945 17.8535 4.37615Z" fill="black"/>
                          </svg>
                      </button>
                    </div>
                    <div className="absolute top-0 right-0 flex items-center justify-center h-full w-12 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button className="slider-arrow slider-arrow--right" onClick={handleNext}>
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.98657 4.37427C9.82301 4.5417 9.73145 4.76646 9.73145 5.00052C9.73145 5.23458 9.82301 5.45934 9.98657 5.62677L19.1234 14.9999L9.98657 24.3711C9.82301 24.5386 9.73145 24.7633 9.73145 24.9974C9.73145 25.2315 9.82301 25.4562 9.98657 25.6236C10.0661 25.7053 10.1611 25.7702 10.2661 25.8145C10.3711 25.8588 10.4839 25.8816 10.5978 25.8816C10.7118 25.8816 10.8246 25.8588 10.9295 25.8145C11.0345 25.7702 11.1296 25.7053 11.2091 25.6236L20.9253 15.6543C21.096 15.4792 21.1915 15.2444 21.1915 14.9999C21.1915 14.7554 21.096 14.5206 20.9253 14.3455L11.2091 4.37615C11.1296 4.2945 11.0345 4.22961 10.9295 4.1853C10.8246 4.14099 10.7118 4.11816 10.5978 4.11816C10.4839 4.11816 10.3711 4.14099 10.2661 4.1853C10.1611 4.22961 10.0661 4.2945 9.98657 4.37615V4.37427Z" fill="black"/>
                          </svg>
                      </button>
                    </div>
                    <div className='flex mt-3'>
                        <p className="text-black font-semibold text-sm mx-auto">{fileNumber} of {data.length}</p>
                    </div>
                </>
            ) : null}
        </div>

        <div className="basis-1/2 pt-2 pl-8 pr-8 pb-8">
            <div className="text-3xl text-black font-bold">Judul Postingan</div>
            <p className="mt-2 text-black font-semibold">Description<br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus consectetur fuga odio aliquam, asperiores fugiat eaque earum. Sunt ea expedita neque debitis deserunt quas sed molestias praesentium omnis accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi doloribus harum architecto odit cupiditate distinctio nostrum rerum, commodi reiciendis repellendus voluptas nemo accusantium modi, aperiam tempora molestias beatae repudiandae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quibusdam asperiores repellendus iure quasi commodi obcaecati soluta totam fuga id sapiente laudantium hic libero modi sunt voluptatem, voluptate recusandae ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos illum magni aspernatur est assumenda similique. Nisi aperiam laboriosam quia temporibus esse saepe. Officiis sapiente tempore at eos deleniti blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, accusamus a? Possimus, distinctio culpa! Eum voluptate, iusto pariatur natus soluta in tempora, facere, nam illum quasi sed harum officia reiciendis.</p>
            <p className="mt-5 text-black font-semibold">Tags</p>
            <p className="mt-2 text-gray-500">Published Time</p>
            <div className='flex mt-2'>
                <Link to={`/postCreator`} className="font-medium text-black dark:text-gray-700 hover:underline" onClick={toggleLike}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill={liked ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke-width="1.5" stroke={liked ? 'currentColor' : 'currentColor'} className="w-8 h-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </Link>
                <p className=" text-black text-lg font-semibold mx-1">9</p>
                <Link to={`/postCreator`} className="font-medium text-black dark:text-gray-700 hover:underline mx-1" onClick={toggleComments}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill={showComments ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke-width="1.5" stroke={showComments ? 'currentColor' : 'currentColor'} class="w-8 h-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                  </svg>
                </Link>
                <p className=" text-black font-semibold mx-1 text-lg">4</p>
                <Link to={`/postCreator`} className="font-medium text-black dark:text-gray-700 hover:underline mx-1" onClick={toggleModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                  </svg>
                </Link>

                {showModal && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                      <div className="bg-white p-4 rounded-xl">
                        <p>Here is the link:</p>
                        <p>https://example.com/postingan</p>
                        <button className="mt-4 bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-md mr-auto" onClick={toggleModal}>Close</button>
                      </div>
                  </div>
                )}

                <p className=" text-black font-semibold mx-1 text-lg">5</p>

                <Link to={`/postCreator`} className="font-medium text-black dark:text-gray-700 hover:underline mx-1" onClick={toggleOption}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </Link>

                {isOptionModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-30">
                        <div className="bg-white p-4 rounded-xl text-center text-sm font-semibold">
                          <p className='text-[15px]'>More options</p>
                          <div className="flex flex-col m-4">
                            <button className="bg-black hover:bg-gray-700 text-white py-2 px-6 rounded-md my-1" onClick={handleRedirect}>
                              Edit Post
                            </button>

                            <button className="bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-md my-1" onClick={() => { toggleDelete(); setIsOptionModalOpen(false); }}>
                            Delete Post
                            </button>
                            <button className=" bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-md my-1" onClick={() => setIsOptionModalOpen(false)}>
                            Cancel
                            </button>
                          </div>
                        </div>
                    </div>
                )}

                {isDeleteModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-30">
                        <div className="bg-white p-4 rounded-xl">
                            <p>Are you sure you want to delete this post?</p>
                            <div className="flex justify-end mt-4">
                                <button className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md" onClick={() => setIsDeleteModalOpen(false)}>
                                Cancel
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md" onClick={() => { handleDelete(); setIsDeleteModalOpen(false); }}>
                                Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {successAlert && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                        <div className="bg-white p-4 rounded-xl">
                            <p>Post deleted successfully!</p>
                            <button className="mt-4 bg-black hover:bg-gray-700 text-white py-2 px-4 rounded-md ml-auto" onClick={closeAlert}>Close</button>
                        </div>
                    </div>
                )}

                <div className='text-white font-semibold text-[12px] bg-gray-800 rounded-lg px-4 py-2'>Tier1</div>

            </div>

            {showComments && (
                <>
                <div className="border border-t-1 border-black w-full my-5"></div>
                <div className='flex my-5'>
                  <img className="lg:w-20 lg:h-20 rounded-full" style={{ width: '65px', height: '65px' }} src="https://picsum.photos/500/500?random" alt="Profile" />
                  <div className='mx-3 w-full'>
                    <p className="text-black font-semibold mb-1">Profile</p>
                    <div className="flex items-center border border-black rounded-xl px-4 py-2 focus:outline-none focus:border-gray-500 w-full">
                      <input
                          type="text"
                          className="flex-1 focus:outline-none"
                          placeholder="Add comment..."
                      />
                      <svg className='cursor-pointer' width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 20V12.0708L7.58088 10L0 7.92923V0L20 10L0 20Z" fill="black"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className='flex my-5'>
                  <img className="lg:w-20 lg:h-20 rounded-full" style={{ width: '65px', height: '65px' }} src="https://picsum.photos/500/500?random" alt="Profile" />
                  <div className='mx-3 w-full'>
                    <p className="text-black font-semibold mb-1">Profile</p>
                    <p className="text-gray-500 font-semibold">Comments</p>
                  </div>
                </div>

                <div className='flex my-5'>
                  <img className="lg:w-20 lg:h-20 rounded-full" style={{ width: '65px', height: '65px' }} src="https://picsum.photos/500/500?random" alt="Profile" />
                  <div className='mx-3 w-full'>
                    <p className="text-black font-semibold mb-1">Profile</p>
                    <p className="text-gray-500 font-semibold">Comments</p>
                  </div>
                </div>

                <div className='flex justify-center items-center'>
                  <Link to={`/postCreator`} className="text-black font-semibold" onClick={toggleComments}>
                  {showComments ? 'Show Less Comments' : 'View Comments'}
                  </Link>
                </div>
                </>
            )}
        </div>
      </div>
    </div>
  );
}

export default PostCreator;