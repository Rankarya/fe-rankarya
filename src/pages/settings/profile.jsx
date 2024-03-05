export default function Profile() {
  return (
    <>
      <div className="flex flex-col gap-4 border-l-2 pl-8">
        <label className="mt-2 font-bold">Settings</label>
        <div className="flex items-center gap-3">
          <div>
            <img
              src="https://i.imgur.com/eOx9uGG.jpeg"
              className="w-[40px] h-[40px] rounded-md"
            ></img>
          </div>
          <div className="flex flex-col">
            <label>Arianna</label>
            <label>Indonesia</label>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <label className="font-semibold">Display Name</label>
          <input className="border-b border-b-gray-300 w-[300px] focus:outline-none"></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Pronouns</label>
          <input className="border-b border-b-gray-300 w-[300px] focus:outline-none"></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Country</label>
          <input className="border-b border-b-gray-300 w-[300px] focus:outline-none"></input>
        </div>
        <div className="flex flex-col gap-1 mb-24">
          <label className="font-semibold">About me</label>
          <input className="border-b border-b-gray-300 w-[300px] focus:outline-none"></input>
        </div>
      </div>
    </>
  );
}
