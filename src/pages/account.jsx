export default function Account() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Email</label>
          <input className="border-b border-b-gray-300 w-[600px] focus:outline-none"></input>
        </div>
        <div className="flex gap-4 mt-8">
          <button className="bg-black text-white rounded-md px-2 py-1 w-[150px] hover:opacity-50 duration-150">
            Log Out
          </button>
          <button className="bg-black text-white rounded-md px-2 py-1  w-[150px] hover:opacity-50 duration-150">
            {" "}
            Change Password
          </button>
        </div>
      </div>
    </>
  );
}
