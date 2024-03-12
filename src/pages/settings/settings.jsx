import React, { useState } from "react";
import Account from "./account";
import Profile from "./profile";
import Theme from "./theme";
import Sidebar from "../../components/sidebar";
import Updateprofile from "./updateprofile";
import Subscription from "./subscription";

export default function Settings() {
  const [activePage, setActivePage] = useState("Profile");

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  };

  return (
    <div className="flex">
      <Sidebar handlePageChange={handlePageChange} activePage={activePage} />
      <div className="border-l-2 pl-8 pt-2">
        <div className="font-bold mb-4 text-xl">Settings</div>
        <Profile/>
        {activePage === "Profile" && <Updateprofile />}
        {activePage === "Account" && <Account />}
        {activePage === "Theme" && <Theme />}
        {activePage === "Subscription" && <Subscription/>}
      </div>
    </div>
  );
}
