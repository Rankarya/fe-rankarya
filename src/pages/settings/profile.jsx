export default function Profile() {
  return (
    <>
      <div className="flex items-center gap-3 border-b pb-2 mb-6 w-[600px]">
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
    </>
  );
}
