const Navbar = ({ toggleFullScreen }) => {
  return (
    <div className="text-white flex w-full justify-center text-2xl font-custom-one pt-4 flex-col items-center md:text-5xl">
      <div className="flex">
        <h1 className="">Enter a 5-digit</h1>
        <span className="text-custom-yellow ml-2">number</span>
      </div>
      <div className="pt-2">
        <button onClick={() => toggleFullScreen((prev) => !prev)}>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g clip-path="url(#clip0_429_11087)">
                {" "}
                <path
                  d="M4 4.00098H20V18.001C20 19.1055 19.1046 20.001 18 20.001H6C4.89543 20.001 4 19.1055 4 18.001V4.00098Z"
                  stroke="#FFB703"
                  stroke-width="1.008"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <rect
                  x="12"
                  y="8"
                  width="0.01"
                  height="0.01"
                  stroke="#FFB703"
                  stroke-width="1.008"
                  stroke-linejoin="round"
                ></rect>{" "}
                <path
                  d="M12 12V16"
                  stroke="#FFB703"
                  stroke-width="1.008"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="clip0_429_11087">
                  {" "}
                  <rect width="24" height="24" fill="white"></rect>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
