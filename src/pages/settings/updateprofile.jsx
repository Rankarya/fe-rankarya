export default function Updateprofile() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="mt-4 flex flex-col gap-1 ">
          <label className="font-semibold">Display Name</label>
          <input className="border-b border-b-gray-300 w-[600px] focus:outline-none"></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Pronouns</label>
          <input className="border-b border-b-gray-300 w-[600px] focus:outline-none"></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Country</label>
          <input className="border-b border-b-gray-300 w-[600px] focus:outline-none"></input>
        </div>
        <div className="flex flex-col gap-1 mb-24">
          <label className="font-semibold">About me</label>
          <input className="border-b border-b-gray-300 w-[600px] focus:outline-none"></input>
        </div>
      </div>
    </>
  );
}
