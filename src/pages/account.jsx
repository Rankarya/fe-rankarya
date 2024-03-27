import { useTheme } from "../context/ThemeContext";

export default function Account() {
  const { theme } = useTheme();
  return (
    <>
      <div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold mt-6">Email</label>
          <input
            type="text"
            className={
              theme === "dark"
                ? "bg-neutral-900 p-2 rounded-t-md border-b border-white focus:outline-none hover:bg-neutral-800 "
                : "bg-stone-100 p-2 rounded-t-lg border-b border-b-black focus:outline-none hover:bg-white"
            }
          ></input>
        </div>
        <div className="flex gap-4 mt-8">
          <button
            className={`${
              theme === "dark"
                ? "bg-neutral-800 text-white rounded-md px-2 py-1 w-[150px] hover:bg-neutral-700 duration-150"
                : "bg-black text-white rounded-md px-2 py-1 w-[150px] hover:bg-neutral-700 duration-150"
            }`}
          >
            Log Out
          </button>
          <button
            className={`${
              theme === "dark"
                ? "bg-neutral-800 text-white rounded-md px-2 py-1 w-[150px] hover:bg-neutral-700 duration-150"
                : "bg-black text-white rounded-md px-2 py-1 w-[150px] hover:bg-neutral-700 duration-150"
            }`}
          >
            Change Password
          </button>
        </div>
      </div>
    </>
  );
}
