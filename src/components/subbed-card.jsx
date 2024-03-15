export default function Subbed() {
  return (
    <div>
      <div className="group flex gap-3 items-center rounded-md hover:cursor-pointer hover:shadow-md hover:duration-300">
        <div>
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
