export default function Help() {
  return (
    <div className="flex flex-col gap-4">
      <label>How can we help you?</label>
      <input className="focus:outline-none border border-b rounded-md"></input>
      <div>
        <ul className="flex gap-4">
          <li className="flex items-center bg-black text-white w-24 h-24 rounded-md p-2 text-center">
            Getting Started
          </li>
          <li className="flex items-center bg-black text-white w-24 h-24 rounded-md p-2 text-center">
            <label className="w-full">Guides</label>
          </li>
          <li className="flex items-center bg-black text-white w-24 h-24 rounded-md p-2 text-center">
            <label className="w-full">Wallet</label>
          </li>
        </ul>
      </div>
    </div>
  );
}
