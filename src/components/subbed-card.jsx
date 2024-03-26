export default function Subbed() {
  return (
    <div className="mt-10">
      <div className="group flex bg-stone-200 gap-3 items-center rounded-lg hover:cursor-pointer hover:duration-300">
        <div className="p-2">
          <img
            src="https://i.imgur.com/eOx9uGG.jpeg"
            className="w-[40px] h-[40px] rounded-full"
          ></img>
        </div>
        <div className="flex flex-col">
          <label className="group-hover:cursor-pointer">Rankarya</label>
          <label className="duration-300 group-hover:cursor-pointer text-sm">Member</label>
        </div>
      </div>
    </div>
  );
}
