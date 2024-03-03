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
      className="fixed bottom-0 w-full"
      style={{ backgroundColor: "white", color: "black" }}
    >
      <div className="w-full h-full">
        <hr className="border-t-2 border-black w-full mb-4" />
        {/* Garis batas atas footer */}
        <div className="grid lg:grid-cols-3 justify-between">
          <div className="flex items-center">
            <Footer.Brand
              src="https://i.imgur.com/QW57zC3.jpeg"
              alt="Furnivul Logo"
              name={<span className="text-black">Furnivul</span>}
              className="text-black mx-2"
              style={{ width: "70px", height: "auto" }}
            />
            <div>
              <div className="my-4">
                <span className="text-black">Rankarya</span> atau Rantai Karya
                adalah platform <br /> crowdfunding penikmat seni yang <br />
                memungkinkan seorang penggemar dapat <br /> menikmati karya para
                konten kreator <br /> dengan sistem langganan berbayar.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-end">
            <div
              className="text-center mx-auto"
              style={{ fontSize: "25px", fontWeight: "bold" }}
            >
              Tuangkan kreativitas mu di Rankarya!
            </div>
          </div>
          <div className="flex justify-end mr-10">
            <div className="sm:col-span-3">
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
        <div className="w-full sm:flex justify-center gap-4 sm:items-center">
          <Footer.Copyright
            href="#"
            by="Rankarya"
            year={2024}
            className="text-black"
          />
          <div className="mt-4 flex gap-2 sm:mt-0 sm:justify-end">
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
