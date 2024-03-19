export default function ProfileCard({ data }) {
  const limitedDescription = data.description.slice(0, 100);
  return (
    <div className="mt-8 flex flex-col w-[180px] h-[240px] border border-black rounded-md hover:cursor-pointer hover:opacity-75">
      <div className="flex justify-center">
        <div className="bg-black h-[60px] w-full">i</div>
        <img
          className="absolute mt-6 w-14 h-14 rounded-md"
          src="https://i.imgur.com/eOx9uGG.jpeg"
        ></img>
      </div>
      <div className="text-sm mt-6 flex justify-center">
        <span>{data.nama}</span>
      </div>
      <div className="flex justify-between mt-2 mx-8">
        <div className="flex flex-col text-center">
          <span className="text-sm">Posts</span>
          <span className="font-bold">20</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-sm">Subs</span>
          <span className="font-bold">20</span>
        </div>
      </div>
      <div className="flex justify-center items-center px-2">
        <span className="text-xs text-center mt-4 overflow-hidden overflow-ellipsis">
          {limitedDescription} {data.description.length > 100 ? "..." : ""}
        </span>
      </div>
    </div>
  );
}
