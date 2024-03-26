export default function Help() {
  return (
    <div className="flex flex-col gap-4 mt-9">
      <label className="text-xl font-bold">How can we help you?</label>
      <input className="w-[400px] focus:outline-none border border-black rounded-md"></input>
      <div>
        <ul className="flex gap-4">
          {["Getting Started", "Guides", "Wallet"].map((item, index) => (
            <li
              key={index}
              className="flex justify-center items-center bg-black text-white w-24 h-24 rounded-md p-2 text-center duration-300 hover:opacity-75 hover:cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
