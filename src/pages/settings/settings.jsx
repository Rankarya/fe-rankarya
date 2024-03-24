import Sidebar from "../../components/sidebar";
import Account from "./account";
import Profile from "./profile";
import Theme from "./theme";
import Updateprofile from "./updateprofile";

export default function Settings() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="border-l-2 pl-8 pt-2">
        <div className="font-bold mb-4 text-xl">Settings</div>
        <Profile />
        <Updateprofile/>
        <Account/>
        <Theme/>
      </div>
    </div>
  );
}
