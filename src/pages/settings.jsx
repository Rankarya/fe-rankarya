import React, { useState } from "react";
import Account from "./account";
import Profile from "./profile";
import Theme from "./theme";
import Sidebar from "../components/sidebar";
import Updateprofile from "./updateprofile";
import Subscription from "./subscription";
import Help from "./help";
import Terms from "./terms";

export default function Settings() {
  const [activePage, setActivePage] = useState("Profile");

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  };

  return (
    <div className="flex">
      <Sidebar handlePageChange={handlePageChange} activePage={activePage} />
      <div className="ml-64 pl-8 pt-2 w-[633px]">
        <div className="font-bold mb-4 mt-6 text-2xl">Settings</div>
        {activePage === "Profile" && <Updateprofile />}
        {activePage === "Account" && <Account />}
        {activePage === "Theme" && <Theme />}
        {activePage === "Subscription" && <Subscription/>}
        {activePage === "Help Center" && <Help/>}
        {activePage === "Terms of Use" && <Terms/>}
      </div>
    </div>
  );
}
