import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function Component() {
  return (
    <Footer
      container
      fluid="true"
      style={{ backgroundColor: "white", color: "black" }}
    >
      <div className="w-full h-full">
        <hr className="border-t-2 border-black w-full mb-4" />{" "}
        {/* Garis batas atas footer */}
        <div className="grid lg:grid-cols-3 justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 items-stretch">
          <div className="mt- flex items-center justify-start">
            <Footer.Brand
              //   href="#"
              src="https://i.imgur.com/XHGRvkp.png"
              alt="Furnivul Logo"
              name={<span className="text-black">Furnivul</span>}
              className="text-black mx-2"
              style={{ width: "70px", height: "auto" }}
            />
            <div className="">
              <div className="my-4">
                <span className="text-black">Rankarya</span> atau Rantai Karya
                adalah platform <br></br> crowdfunding penikmat seni yang{" "}
                <br></br> memungkinkan seorang penggemar dapat <br></br>
                menikmati karya para konten kreator <br></br> dengan sistem
                langganan berbayar.
              </div>
            </div>
          </div>
          <div className="text-center sm:text-left flex items-center justify-center sm:justify-start">
            <div className="m-auto">Tuangkan kreativitas mu di Rankarya!</div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="sm:mt-1 justify-start">
              <Footer.LinkGroup col>
                <Footer.Link href="" className="text-black">
                  Home
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link href="" className="text-black mt-3">
                  Categories
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-black mt-3">
                  Top Creators
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-black mt-3 mb-9">
                  Top Contents
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex justify-center gap-4 sm:items-center sm:flex-end">
          <Footer.Copyright
            href="#"
            by="Rankarya"
            year={2024}
            className="text-black"
          />
          <div className="mt-4  flex gap-2 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              style={{ color: "#000000" }}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              style={{ color: "#000000" }}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              style={{ color: "#000000" }}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
              style={{ color: "#000000" }}
            />
            <Footer.Icon
              href="#"
              icon={BsDribbble}
              style={{ color: "#000000" }}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Component;
