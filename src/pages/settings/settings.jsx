export default function Settings() {
  return (
    <div className="flex">
      <div className="flex flex-col w-2/12 pl-4 ">
        <ul className="flex flex-col gap-4 border-b-2 pb-2">
          <li className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7 9.35L16.7 10.35L14.65 8.3L15.65 7.3C15.7528 7.19923 15.891 7.14278 16.035 7.14278C16.179 7.14278 16.3172 7.19923 16.42 7.3L17.7 8.58C17.91 8.79 17.91 9.14 17.7 9.35ZM8 14.94L14.06 8.88L16.11 10.93L10.06 17H8V14.94ZM8 10C3.58 10 0 11.79 0 14V16H6V14.11L10 10.11C9.34 10.03 8.67 10 8 10ZM8 0C6.93913 0 5.92172 0.421427 5.17157 1.17157C4.42143 1.92172 4 2.93913 4 4C4 5.06087 4.42143 6.07828 5.17157 6.82843C5.92172 7.57857 6.93913 8 8 8C9.06087 8 10.0783 7.57857 10.8284 6.82843C11.5786 6.07828 12 5.06087 12 4C12 2.93913 11.5786 1.92172 10.8284 1.17157C10.0783 0.421427 9.06087 0 8 0Z"
                fill="black"
              />
            </svg>
            Profile
          </li>
          <li className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0122 0.25C10.7462 0.258 11.4772 0.343 12.1942 0.503C12.3468 0.53705 12.4848 0.617903 12.5892 0.734261C12.6935 0.850618 12.7589 0.996668 12.7762 1.152L12.9462 2.679C12.9702 2.89428 13.0444 3.10093 13.1629 3.28231C13.2813 3.46368 13.4406 3.61473 13.6281 3.72329C13.8155 3.83185 14.0259 3.89489 14.2421 3.90735C14.4584 3.9198 14.6745 3.88132 14.8732 3.795L16.2732 3.18C16.4155 3.11735 16.5737 3.10044 16.7259 3.13161C16.8782 3.16278 17.017 3.24049 17.1232 3.354C18.1355 4.43501 18.8894 5.73153 19.3282 7.146C19.3741 7.29474 19.3726 7.45406 19.3238 7.60189C19.2751 7.74971 19.1816 7.87871 19.0562 7.971L17.8152 8.887C17.6404 9.01517 17.4982 9.18273 17.4002 9.3761C17.3022 9.56947 17.2511 9.78321 17.2511 10C17.2511 10.2168 17.3022 10.4305 17.4002 10.6239C17.4982 10.8173 17.6404 10.9848 17.8152 11.113L19.0582 12.028C19.1838 12.1204 19.2774 12.2495 19.3262 12.3976C19.3749 12.5456 19.3763 12.7051 19.3302 12.854C18.8915 14.2683 18.138 15.5648 17.1262 16.646C17.0202 16.7595 16.8816 16.8372 16.7296 16.8686C16.5775 16.8999 16.4194 16.8833 16.2772 16.821L14.8712 16.204C14.6728 16.117 14.4567 16.0779 14.2404 16.09C14.0241 16.102 13.8136 16.1648 13.6261 16.2733C13.4386 16.3817 13.2792 16.5328 13.1609 16.7143C13.0426 16.8958 12.9687 17.1026 12.9452 17.318L12.7752 18.844C12.7582 18.9975 12.6943 19.142 12.5921 19.2578C12.4899 19.3736 12.3544 19.4551 12.2042 19.491C10.7558 19.8356 9.24667 19.8356 7.79822 19.491C7.64782 19.4553 7.51214 19.3739 7.40975 19.2581C7.30736 19.1423 7.24326 18.9976 7.22622 18.844L7.05722 17.32C7.03267 17.1053 6.95812 16.8994 6.83955 16.7187C6.72098 16.5381 6.56171 16.3877 6.37451 16.2798C6.18731 16.1718 5.97741 16.1093 5.76166 16.0972C5.54591 16.0851 5.33032 16.1237 5.13222 16.21L3.72622 16.826C3.58387 16.8885 3.42561 16.9053 3.27333 16.8739C3.12106 16.8426 2.98228 16.7647 2.87622 16.651C1.86429 15.5685 1.11106 14.2706 0.673216 12.855C0.627112 12.7061 0.628532 12.5466 0.677278 12.3986C0.726025 12.2505 0.819676 12.1214 0.945215 12.029L2.18822 11.113C2.36306 10.9848 2.50525 10.8173 2.60327 10.6239C2.70128 10.4305 2.75235 10.2168 2.75235 10C2.75235 9.78321 2.70128 9.56947 2.60327 9.3761C2.50525 9.18273 2.36306 9.01517 2.18822 8.887L0.945215 7.973C0.819676 7.88065 0.726025 7.75148 0.677278 7.60345C0.628532 7.45542 0.627112 7.29588 0.673216 7.147C1.11203 5.73253 1.86594 4.43601 2.87822 3.355C2.9844 3.24149 3.12323 3.16378 3.2755 3.13261C3.42777 3.10144 3.58597 3.11835 3.72822 3.181L5.12822 3.796C5.32723 3.88227 5.54371 3.92066 5.76026 3.90809C5.97681 3.89551 6.18739 3.83232 6.37509 3.7236C6.56278 3.61487 6.72236 3.46363 6.841 3.28204C6.95964 3.10045 7.03404 2.89356 7.05822 2.678L7.22822 1.152C7.24537 0.996355 7.31082 0.849984 7.41537 0.733414C7.51993 0.616845 7.65835 0.535924 7.81122 0.502C8.53421 0.342213 9.27181 0.257762 10.0122 0.25ZM10.0002 7C9.20457 7 8.4415 7.31607 7.87889 7.87868C7.31629 8.44129 7.00022 9.20435 7.00022 10C7.00022 10.7956 7.31629 11.5587 7.87889 12.1213C8.4415 12.6839 9.20457 13 10.0002 13C10.7959 13 11.5589 12.6839 12.1215 12.1213C12.6841 11.5587 13.0002 10.7956 13.0002 10C13.0002 9.20435 12.6841 8.44129 12.1215 7.87868C11.5589 7.31607 10.7959 7 10.0002 7Z"
                fill="black"
              />
            </svg>
            Account
          </li>
          <li className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20ZM10 18.5V1.5C12.2543 1.5 14.4163 2.39553 16.0104 3.98959C17.6045 5.58365 18.5 7.74566 18.5 10C18.5 12.2543 17.6045 14.4163 16.0104 16.0104C14.4163 17.6045 12.2543 18.5 10 18.5Z"
                fill="black"
              />
            </svg>
            Theme
          </li>
          <li className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.539 8.242H0.459961V5.406H21.54L21.539 8.242ZM0.459961 10.812V24L11 18.11L21.54 24V10.812H0.459961ZM21.54 0H0.459961V2.836H21.54V0Z"
                fill="black"
              />
            </svg>
            Subscriptions
          </li>
          <li className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00488281 6H19.0049C19.2701 6 19.5245 6.10536 19.712 6.29289C19.8995 6.48043 20.0049 6.73478 20.0049 7V17C20.0049 17.2652 19.8995 17.5196 19.712 17.7071C19.5245 17.8946 19.2701 18 19.0049 18H1.00488C0.739666 18 0.485312 17.8946 0.297776 17.7071C0.11024 17.5196 0.00488281 17.2652 0.00488281 17V6ZM1.00488 0H16.0049V4H0.00488281V1C0.00488281 0.734784 0.11024 0.48043 0.297776 0.292893C0.485312 0.105357 0.739666 0 1.00488 0ZM13.0049 11V13H16.0049V11H13.0049Z"
                fill="black"
              />
            </svg>
            Wallet
          </li>
        </ul>
        <ul className="flex flex-col gap-4 pt-2">
          <li className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10V15.154C20 16.8 18.58 18 17 18H14V10H18C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10H6V18H4.063C4.17387 18.4294 4.42431 18.8098 4.77495 19.0813C5.12558 19.3528 5.55652 19.5001 6 19.5H7.564C7.88 19.047 8.405 18.75 9 18.75H11C11.4641 18.75 11.9092 18.9344 12.2374 19.2626C12.5656 19.5908 12.75 20.0359 12.75 20.5C12.75 20.9641 12.5656 21.4092 12.2374 21.7374C11.9092 22.0656 11.4641 22.25 11 22.25H9C8.405 22.25 7.88 21.953 7.564 21.5H6C4.99791 21.5001 4.03228 21.1241 3.29415 20.4463C2.55602 19.7686 2.09918 18.8385 2.014 17.84C0.874 17.463 0 16.446 0 15.155V10ZM4 16V12H2V15.154C2 15.547 2.37 16 3 16H4ZM18 12H16V16H17C17.63 16 18 15.547 18 15.154V12Z"
                fill="black"
              />
            </svg>
            Help Center
          </li>
          <li className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V18C16 18.5304 15.7893 19.0391 15.4142 19.4142C15.0391 19.7893 14.5304 20 14 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H14ZM8 11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H8C8.26522 13 8.51957 12.8946 8.70711 12.7071C8.89464 12.5196 9 12.2652 9 12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11ZM11 6H5C4.74512 6.00028 4.49997 6.09788 4.31463 6.27285C4.1293 6.44782 4.01776 6.68695 4.00283 6.94139C3.98789 7.19584 4.07067 7.44638 4.23426 7.64183C4.39785 7.83729 4.6299 7.9629 4.883 7.993L5 8H11C11.2549 7.99972 11.5 7.90212 11.6854 7.72715C11.8707 7.55218 11.9822 7.31305 11.9972 7.05861C12.0121 6.80416 11.9293 6.55362 11.7657 6.35817C11.6021 6.16271 11.3701 6.0371 11.117 6.007L11 6Z"
                fill="black"
              />
            </svg>
            Terms of Use
          </li>
          <li className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 15H9V9H7V15ZM8 7C8.28333 7 8.521 6.904 8.713 6.712C8.905 6.52 9.00067 6.28267 9 6C9 5.71667 8.904 5.47933 8.712 5.288C8.52 5.09667 8.28267 5.00067 8 5C7.71667 5 7.47933 5.096 7.288 5.288C7.09667 5.48 7.00067 5.71733 7 6C7 6.28333 7.096 6.521 7.288 6.713C7.48 6.905 7.71733 7.00067 8 7ZM8 20C5.68333 19.4167 3.77067 18.0873 2.262 16.012C0.753334 13.9367 -0.000666225 11.6327 4.41696e-07 9.1V3L8 0L16 3V9.1C16 11.6333 15.246 13.9377 13.738 16.013C12.23 18.0883 10.3173 19.4173 8 20Z"
                fill="black"
              />
            </svg>
            Privacy Policy
          </li>
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
        </div>
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
