import { useTheme } from "../context/ThemeContext";

export default function Updateprofile() {
  const theme = useTheme()
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="mt-6 flex flex-col gap-1 ">
          <label className="font-semibold">Display Name</label>
          <input className="border-b border-b-gray-300 bg-stone-100 w-[600px] focus:outline-none"></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Pronouns</label>
          <input className="border-b border-b-gray-300 bg-stone-100 w-[600px] focus:outline-none"></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Country</label>
          <input className="border-b border-b-gray-300 bg-stone-100 w-[600px] focus:outline-none"></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">About me</label>
          <input className="border-b border-b-gray-300 bg-stone-100 w-[600px] focus:outline-none"></input>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label className="font-semibold mr-4 text-end">
              Wallet Address
            </label>
          </div>
          <input className="border-b border-b-gray-300 bg-stone-100 w-[600px] focus:outline-none"></input>
        </div>
        <div className="rounded-md duration-300 p-2 w-[180px] hover:cursor-pointer hover:shadow-lg">
          <img src="../src/assets/metamask-seeklogo.svg"></img>
          <label className="text-xs text-orange-400 font-bold h-full mb-24 cursor-pointer">
            Connect with MetaMask
          </label>
        </div>
      </div>
    </>
  );
}
