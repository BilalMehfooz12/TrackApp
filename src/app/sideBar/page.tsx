import "./sideBar.css";
const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="grid grid-cols-12  ">
        <div className="col-span-2 side_bar_main">
          <div className="grid grid-cols-12 gap-2  logo">
            <div className="col-span-2">
              <svg
                className="h-8 w-8 text-white white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>

            <div className="col-span-9">
              <h1>Vtrack</h1>
            </div>
          </div>
          {/* second part btn */}
          <div className="grid grid-cols-12 gap-2  btn_bg">
            <div className="col-span-2">
              <svg
                className="h-8 w-8 text-white white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>

            <div className="col-span-9">
              <h1>Total Devices</h1>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2  btn">
            <div className="col-span-2">
              <svg
                className="h-8 w-8 text-white white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>

            <div className="col-span-9">
              <h1>Live Tracking</h1>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2   btn ">
            <div className="col-span-2">
              <svg
                className="h-8 w-8 text-white white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>

            <div className="col-span-9">
              <h1>Journey Replay</h1>
            </div>
          </div>
          <div className="border-b-2 border-bgBtn mt-20 m-2"></div>

          <div className="grid grid-cols-12 gap-2    ">
            <div className="col-span-10">
              <h1>Journey Replay</h1>
            </div>
            <div className="col-span-1 ">
              <svg
                className="h-8 w-8 text-white white mt-4 linked_logo "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <circle cx="12" cy="12" r="10" />{" "}
                <line x1="15" y1="9" x2="9" y2="15" />{" "}
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2  btn_bg">
            <div className="col-span-2">
              <svg
                className="h-8 w-8 text-white white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>

            <div className="col-span-9">
              <h1>Total Devices</h1>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2   btn ">
            <div className="col-span-2">
              <svg
                className="h-8 w-8 text-white white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>

            <div className="col-span-9">
              <h1>Journey Replay</h1>
            </div>
          </div>

          <div className="border-b-2 border-bgBtn mt-96 mb-8 m-2"></div>
          <div className="grid grid-cols-12 gap-2   btn ">
            <div className="col-span-2">
              <svg
                className="h-8 w-8 text-white white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>

            <div className="col-span-9">
              <h1>Journey Replay</h1>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2 upgrade_btn ">
            <div className="col-span-2">
              <svg
                className="h-8 w-8 text-white white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>

            <div className="col-span-8">
              <h1>Journey Replay </h1>
            </div>
            <div className="col-span-2  h-6 new_btn">
              <button>New</button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2  btn_solace">
            <div className="col-span-2">
              <svg
                className="h-8 w-8 text-white white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>

            <div className="col-span-8">
              <h1>Total Devices</h1>
              <h1>Total Devices</h1>
            </div>
            <div className="col-span-2  h-6  mt-2">
              <svg
                className="h-8 w-8 text-white white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>

        <div className="col-span-10  header_main">
          <div className="grid grid-cols-12 mt-2 mb-2 gap-4">
            <div className="col-span-1 flex justify-center">
              <svg
                className="h-8 w-6 text-white "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />{" "}
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>

            <div className="col-span-1 flex justify-start items-center mt-1 -ms-10">
              <svg
                className="h-4 w-4 text-white mr-4 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-white text-end">Report</span>
            </div>

            <div className="col-span-2 flex justify-start items-center mt-1 -ms-16">
              <svg
                className="h-4 w-4 text-white mr-4 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-white text-end">Report Page and</span>
            </div>
            <div className="col-span-6"></div>
            <div className="col-span-2 mr-6  bg-bgBtn header_btn">
              <div className="grid grid-cols-12">
                <div className="col-span-6 flex justify-start items-center  mt-1">
                  <svg
                    className="h-4 w-4 mr-1 text-white  "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />{" "}
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span className="text-white text-end"> 233,4454 </span>
                </div>
                <div className="col-span-6 flex justify-end items-center  mt-1">
                  <span className="text-white text-end"> 2 year </span>

                  <svg
                    className="h-4 w-4  ms-2 text-white  "
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <polyline points="8 9 12 5 16 9" />{" "}
                    <polyline points="16 15 12 19 8 15" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <h1 style={{ backgroundColor: "white" }}>sfsfd</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
