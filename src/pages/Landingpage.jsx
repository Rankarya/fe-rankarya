import React, { useState } from "react";
import { Label, TextInput, Card } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

function LandingPage() {
  const [activeCreatorsIndex, setActiveCreatorsIndex] = useState(0);
  const [activeContentsIndex, setActiveContentsIndex] = useState(0);
  const [activeHeaderIndex, setActiveHeaderIndex] = useState(0);

  const headerData = [
    {
      title: "TEMUKAN CONTENT MENARIK DI RANKARYA",
      imageUrl: "https://i.imgur.com/K1H4rN0.png",
      contentText:
        "Rankarya adalah platform crowdfunding yang memungkinkan kreator konten untuk mengumpulkan dukungan finansial dari para penggemar mereka melalui sistem pembayaran yang menggunakan teknologi blockchain. Melalui Rankarya, kreator konten dapat membuat profil khusus di mana mereka dapat berbagi konten eksklusif, berinteraksi dengan penggemar, dan menawarkan berbagai tingkat langganan dengan manfaat yang berbeda.",
    },
    {
      title: "PODCAST",
      imageUrl: "https://i.imgur.com/a3cvBp4.png",
      contentText: "INI PODCAST",
    },
    {
      title: "ART",
      imageUrl: "https://i.imgur.com/dNQVq49.png",
      contentText: "INI ART",
    },
    {
      title: "PHOTOGRAPHY",
      imageUrl: "https://i.imgur.com/9lW9s49.png",
      contentText: "INIII PHOTOGRAPHY",
    },
    {
      title: "MUSIC",
      imageUrl: "https://i.imgur.com/BOwQ7vQ.png",
      contentText: "INI MUSIC",
    },
    {
      title: "GAME",
      imageUrl: "https://i.imgur.com/S6GWiB2.png",
      contentText: "INI GAME",
    },
  ];

  const handleHeaderArrowClick = (direction) => {
    if (direction === "left" && activeHeaderIndex > 0) {
      setActiveHeaderIndex(activeHeaderIndex - 1);
    } else if (
      direction === "right" &&
      activeHeaderIndex < headerData.length - 1
    ) {
      setActiveHeaderIndex(activeHeaderIndex + 1);
    }
  };

  const handleCreatorsArrowClick = (direction) => {
    if (direction === "left" && activeCreatorsIndex > 0) {
      setActiveCreatorsIndex(activeCreatorsIndex - 1);
    } else if (direction === "right" && activeCreatorsIndex < 1) {
      setActiveCreatorsIndex(activeCreatorsIndex + 1);
    }
  };

  const handleContentsArrowClick = (direction) => {
    if (direction === "left" && activeContentsIndex > 0) {
      setActiveContentsIndex(activeContentsIndex - 1);
    } else if (direction === "right" && activeContentsIndex < 1) {
      setActiveContentsIndex(activeContentsIndex + 1);
    }
  };

  const handleCardClick = (category) => {
    // Handle card click logic here
  };

   return (
     <div className="absolute top-[4rem] left-0 right-0 h-[400px] bg-[#EFEAEA] flex items-start">
       <div style={{ marginRight: "20px" }}>
         <img
           src={headerData[activeHeaderIndex].imageUrl}
           alt="Placeholder"
           style={{
             width: "544px",
             height: "400px",
             objectFit: "cover",
             objectPosition: "left",
           }}
         />
       </div>
       <div style={{ overflowWrap: "break-word", width: "calc(95% - 564px)" }}>
         <div
           className="text-center ml-12"
           style={{
             color: "black",
             fontSize: "36px",
             fontWeight: "bold",
             marginTop: "30px",
             marginBottom: "10px",
           }}
         >
           {headerData[activeHeaderIndex].title}
         </div>
         <div
           className="text-center ml-12"
           style={{
             color: "#756666",
             fontSize: "18px",
             marginTop: "50px",
             marginBottom: "20px",
           }}
         >
           {headerData[activeHeaderIndex].contentText}
         </div>
         {/* Tombol kiri dan kanan */}
         <div className="text-center mt-12">
           <button
             onClick={() => handleHeaderArrowClick("left")}
             disabled={activeHeaderIndex === 0}
           >
             <HiOutlineArrowLeft className="h-6 w-6" />
           </button>
           <span className="mx-7"></span>
           <button
             onClick={() => handleHeaderArrowClick("right")}
             disabled={activeHeaderIndex === headerData.length - 1}
           >
             <HiOutlineArrowRight className="h-6 w-6" />
           </button>
         </div>
       </div>

       <div
         className="relative flex flex-col items-center justify-center gap-4"
         style={{ paddingTop: "450px" }}
       >
         <div className="w-full max-w-sm mt-9 relative">
           <div className="relative">
             <TextInput
               placeholder="Cari kreator atau topik"
               className="w-full bg-white rounded-md"
               style={{
                 height: "2rem",
                 borderColor: "black",
                 borderWidth: "2px",
                 borderRadius: "20px",
                 paddingLeft: "0.5rem",
               }}
             />
             <button className="absolute right-0 top-1 mr-4">
               <FontAwesomeIcon
                 icon={faSearch}
                 className="w-5 h-4 text-black"
               />
             </button>
           </div>
         </div>
         <div className="flex gap-4 mt-4">
           {/* Card 1 */}
           <Card
             className="rounded-3xl flex-1 relative cursor-pointer"
             imgSrc="https://i.imgur.com/juOHLWy.png"
             horizontal
             onClick={() => handleCardClick("Art")}
           >
             <div className="absolute top-0 left-0 ml-2 mt-2 text-black font-bold">
               Art
             </div>
           </Card>
           {/* Card 2 */}
           <Card
             className="rounded-3xl flex-1 relative cursor-pointer"
             imgSrc="https://i.imgur.com/2yC4N4d.png"
             horizontal
             onClick={() => handleCardClick("Music")}
           >
             <div className="absolute top-0 left-0 ml-2 mt-2 text-white font-bold">
               {" "}
               Music
             </div>
           </Card>
           {/* Card 3 */}
           <Card
             className="rounded-3xl flex-1 relative cursor-pointer"
             imgSrc="https://i.imgur.com/pAzu8Ml.png"
             horizontal
             onClick={() => handleCardClick("Photography")}
           >
             <div className="absolute top-0 left-0 ml-2 mt-2 text-black font-bold">
               Photography
             </div>
           </Card>
           {/* Card 4 */}
           <Card
             className="rounded-3xl flex-1 relative cursor-pointer"
             imgSrc="https://i.imgur.com/MC0xK4j.png"
             horizontal
             onClick={() => handleCardClick("Game")}
           >
             <div className="absolute top-0 left-0 ml-2 mt-2 text-white font-bold">
               Game
             </div>
           </Card>
           {/* Card 5 */}
           <Card
             className="rounded-3xl flex-1 relative cursor-pointer"
             imgSrc="https://i.imgur.com/hugtDZu.png"
             horizontal
             onClick={() => handleCardClick("Podcast")}
           >
             <div className="absolute top-0 left-0 ml-2 mt-2 text-black font-bold">
               Podcast
             </div>
           </Card>
         </div>
         <div style={{ marginLeft: "-33rem" }}>
           <div className="text-2xl font-bold mt-4">
             Top 10 Creators in week
           </div>
         </div>
         <div className="flex gap-4 mt-4">
           {/* Tombol kiri */}
           <div className="flex flex-wrap gap-2">
             <button
               onClick={() => handleCreatorsArrowClick("left")}
               disabled={activeCreatorsIndex === 0}
             >
               <HiOutlineArrowLeft className="h-6 w-6" />
             </button>
           </div>
           {}
           {activeCreatorsIndex === 0 && (
             <>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/EBCRZZV.png"
                 horizontal
                 onClick={() => handleCardClick("Art")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/IOm3vis.png"
                 horizontal
                 onClick={() => handleCardClick("Music")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/wSCPkfn.png"
                 horizontal
                 onClick={() => handleCardClick("Photography")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/KUDTrl3.png"
                 horizontal
                 onClick={() => handleCardClick("Game")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/oXnJIAe.png"
                 horizontal
                 onClick={() => handleCardClick("Podcast")}
               ></Card>
             </>
           )}
           {}
           {activeCreatorsIndex === 1 && (
             <>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/8Ujhz0O.png"
                 horizontal
                 onClick={() => handleCardClick("Art")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/LIErBtm.png"
                 horizontal
                 onClick={() => handleCardClick("Music")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/HEQMY7t.png"
                 horizontal
                 onClick={() => handleCardClick("Photography")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/QKuKurX.png"
                 horizontal
                 onClick={() => handleCardClick("Game")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer "
                 imgSrc="https://i.imgur.com/69KVHrI.png"
                 horizontal
                 onClick={() => handleCardClick("Podcast")}
               ></Card>
             </>
           )}
           {/* Tombol kanan */}
           <div className="flex flex-wrap gap-2">
             <button
               onClick={() => handleCreatorsArrowClick("right")}
               disabled={activeCreatorsIndex === 1}
             >
               <HiOutlineArrowRight className="h-6 w-6" />
             </button>
           </div>
         </div>
         <div style={{ marginLeft: "-33rem" }}>
           <div className="text-2xl font-bold mt-4">
             Top 10 Contents in week
           </div>
         </div>
         <div className="flex gap-4 mt-4 mb-12">
           {/* Tombol kiri */}
           <div className="flex flex-wrap gap-2 mb-12">
             <button
               onClick={() => handleContentsArrowClick("left")}
               disabled={activeContentsIndex === 0}
             >
               <HiOutlineArrowLeft className="h-6 w-6" />
             </button>
           </div>
           {}
           {activeContentsIndex === 0 && (
             <>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/8Ujhz0O.png"
                 horizontal
                 onClick={() => handleCardClick("Art")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/LIErBtm.png"
                 horizontal
                 onClick={() => handleCardClick("Music")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/HEQMY7t.png"
                 horizontal
                 onClick={() => handleCardClick("Photography")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/QKuKurX.png"
                 horizontal
                 onClick={() => handleCardClick("Game")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/69KVHrI.png"
                 horizontal
                 onClick={() => handleCardClick("Podcast")}
               ></Card>
             </>
           )}
           {}
           {activeContentsIndex === 1 && (
             <>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/EBCRZZV.png"
                 horizontal
                 onClick={() => handleCardClick("Art")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/IOm3vis.png"
                 horizontal
                 onClick={() => handleCardClick("Music")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/wSCPkfn.png"
                 horizontal
                 onClick={() => handleCardClick("Photography")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer"
                 imgSrc="https://i.imgur.com/KUDTrl3.png"
                 horizontal
                 onClick={() => handleCardClick("Game")}
               ></Card>
               <Card
                 className="rounded-3xl flex-1 relative cursor-pointer "
                 imgSrc="https://i.imgur.com/oXnJIAe.png"
                 horizontal
                 onClick={() => handleCardClick("Podcast")}
               ></Card>
             </>
           )}
           {/* Tombol kanan */}
           <div className="flex flex-wrap gap-2">
             <button
               onClick={() => handleContentsArrowClick("right")}
               disabled={activeContentsIndex === 1}
             >
               <HiOutlineArrowRight className="h-6 w-6" />
             </button>
           </div>
         </div>
       </div>
     </div>
   );
          } 

export default LandingPage;
