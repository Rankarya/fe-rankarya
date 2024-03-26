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
      contentText:
        "Selamat datang di Podcast Premium Rankarya, Temukan Serunya Berbagai Bidang! Dengarkanlah suara-suara yang menginspirasi, nikmati pengalaman mendengarkan yang tak tertandingi. Hanya dengan berlangganan, Anda akan mendapatkan akses ke konten-konten premium kami yang memikat hati dan pikiran.",
    },
    {
      title: "ART",
      imageUrl: "https://i.imgur.com/dNQVq49.png",
      contentText:
        "Selamat datang di Galeri Premium Rankarya: Temukan Keindahan Berbagai Bidang! Mari menggali ke dalam alam estetika yang memikat, merasakan sentuhan magis dari berbagai karya seni yang mempesona. Hanya dengan berlangganan, Anda akan menemukan akses eksklusif ke dalam dunia kreativitas yang memukau dan menginspirasi.Nikmatilah perjalanan visual yang mendalam, jauh dari kerumitan dunia nyata, dan temukan pengalaman melihat yang tak tertandingi. Bergabunglah dengan kami untuk mengeksplorasi kekayaan seni dari sudut pandang yang baru.",
    },
    {
      title: "PHOTOGRAPHY",
      imageUrl: "https://i.imgur.com/9lW9s49.png",
      contentText:
        "Selamat datang di Podcast Premium Rankarya, Temukan Keindahan Berbagai Bidang Fotografi! Mari jelajahi dunia visual yang memukau, rasakan keajaiban dalam setiap frame. Bersama kami, Anda akan mengalami perjalanan mengagumkan melalui gambar-gambar yang menginspirasi, mengeksplorasi keindahan yang tak terkira dari berbagai sudut pandang. Hanya dengan berlangganan, Anda akan membuka pintu menuju galeri-galeri premium kami yang menawan hati dan memikat pikiran. Sambutlah kehadiran kami sebagai jendela ke dunia fotografi yang penuh warna dan makna.",
    },
    {
      title: "MUSIC",
      imageUrl: "https://i.imgur.com/BOwQ7vQ.png",
      contentText:
        "Selamat datang di Musik Premium Rankarya: Rasakan Kebesaran Beragam Aliran! Dengarkanlah melodi-melodi yang mempesona, nikmati pengalaman mendengarkan yang tak tertandingi. Hanya dengan berlangganan, Anda akan mendapatkan akses ke koleksi musik premium kami yang memukau dan menginspirasi. Segera temukan keindahan dalam setiap nada, dan jadilah bagian dari komunitas pecinta musik yang mengapresiasi keberagaman dan kualitas tinggi!",
    },
    {
      title: "GAME",
      imageUrl: "https://i.imgur.com/S6GWiB2.png",
      contentText:
        "Selamat datang di Game Premium Rankarya: Temukan Petualangan Tanpa Batas! Rasakan sensasi-sensasi yang menghibur, nikmati pengalaman bermain yang tak terlupakan. Hanya dengan berlangganan, Anda akan mendapatkan akses ke koleksi game premium kami yang memukau dan mendebarkan. Segera jelajahi dunia-dunia fantastis, dan jadilah bagian dari komunitas gamer yang selalu haus akan tantangan dan keseruan!",
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
    <div className="flex flex-col">
      <div className=" left-0 right-0 h-[400px] bg-[#EFEAEA] flex">
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
      </div>
      <div className="flex flex-col items-center justify-center gap-4 ml-12">
        <div className="w-full max-w-sm mt-9 ">
          <div className="flex relative">
            <TextInput
              placeholder="Cari kreator atau topik"
              className="w-full bg-white rounded-md pr-10"
              style={{
                height: "2rem",
                borderColor: "black",
                borderWidth: "2px",
                borderRadius: "20px",
                paddingLeft: "0.5rem",
              }}
            />
            <button className="absolute inset-y-0 right-0 flex items-center justify-center">
              <FontAwesomeIcon icon={faSearch} className="w-5 h-4 text-black" />
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
          <div className="text-2xl font-bold mt-4">Top 10 Creators in week</div>
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
          <div className="text-2xl font-bold mt-4">Top 10 Contents in week</div>
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
