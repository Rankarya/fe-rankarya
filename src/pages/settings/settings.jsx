export default function Settings() {
  return (
    <div className="flex">
      <div className="flex flex-col w-3/12">
        <ul className="flex flex-col gap-2 border-b-2 pb-2">
          <li>Profile</li>
          <li>Account</li>
          <li>Theme</li>
          <li>Subscriptions</li>
          <li>Wallet</li>
        </ul>
        <ul className="flex flex-col gap-2 pt-2">
          <li>Help Center</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 border-l-2 pl-4">
        <label>Settings</label>
        <div className="flex items-center gap-3">
          <div>Foto</div>
          <div className="flex flex-col">
            <label>Arianna</label>
            <label>Indonesia</label>
          </div>
        </div>
        <div className="mt-4 flex flex-col">
            <label>Display Name</label>
            <input className="border-b border-b-gray-300 w-[300px]"></input>
        </div>
        <div className="flex flex-col">
            <label>Pronouns</label>
            <input className="border-b border-b-gray-300 w-[300px]"></input>
        </div >
        <div className="flex flex-col">
            <label>Country</label>
            <input className="border-b border-b-gray-300 w-[300px]"></input>
        </div>
        <div className="flex flex-col">
            <label>About me</label>
            <input className="border-b border-b-gray-300 w-[300px]"></input>
        </div>
      </div>
    </div>
  );
}
