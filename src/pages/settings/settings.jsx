import Sidebar from "../../components/sidebar";
import Profile from "./profile";

export default function Settings() {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Profile />
      </div>
    </div>
  );
}
