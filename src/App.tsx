import React, { useState } from "react";

function App() {
  const navBarCenter = [
    {
      name: "Category",
      className: "flex normal-case text-md align-center gap-2 cursor-pointer",
    },
    {
      name: "Filter",
      className: "normal-case text-md cursor-pointer",
    },
    {
      name: "Sale",
      className: "normal-case text-md text-orange-500 cursor-pointer",
    },
  ];

  const navBarStart = [
    {
      name: "Hambuger",
      className: "btn btn-ghost align-center cursor-pointer", 
      icon: (
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55229 17.5523 8 17 8H1C0.447715 8 0 7.55229 0 7ZM0 13C0 12.4477 0.447715 12 1 12H17C17.5523 12 18 12.4477 18 13C18 13.5523 17.5523 14 17 14H1C0.447715 14 0 13.5523 0 13Z"
            fill="#292929"
          />
        </svg>
      ),
      data: [
        {
          id: 0,
          name: "Homepage",
        },
        {
          id: 1,
          name: "Portfolio",
        },
        {
          id: 2,
          name: "About",
        },
      ],
    },
    {
      name: "Logo",
      className: "btn btn-ghost",
    },
  ];

  const navBarEnd = [
    {
      name: "Search",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8Z"
            fill="#292929"
          />
        </svg>
      ),
    },
    {
      name: "Favorite",
      icon: (
        <svg
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.41135 3.01115C6.86226 2.95258 6.30699 3.00833 5.78051 3.1749C5.25402 3.34146 4.76773 3.61524 4.35225 3.97898C3.93677 4.34272 3.6011 4.78854 3.36638 5.28838C3.13167 5.78822 3.00299 6.33124 2.98845 6.88326C2.97391 7.43527 3.07382 7.98432 3.2819 8.49582C3.48997 9.00732 3.8017 9.4702 4.19746 9.85531L4.20377 9.86146L4.20374 9.86148L11.0001 16.5926L17.7964 9.86148C17.8171 9.84097 17.8385 9.82154 17.8605 9.8032C18.2242 9.43013 18.5117 8.98938 18.7066 8.50557C18.9123 7.99497 19.0104 7.4474 18.9948 6.89714C18.9791 6.34688 18.8501 5.80577 18.6157 5.30768C18.3813 4.8096 18.0466 4.36525 17.6326 4.00246C17.2185 3.63967 16.7341 3.36624 16.2095 3.19928C15.685 3.03233 15.1316 2.97544 14.5841 3.03219C14.0365 3.08893 13.5066 3.25808 13.0274 3.52905C12.5482 3.80003 12.1301 4.16699 11.7993 4.60697C11.6098 4.85898 11.3126 5.00687 10.9973 5.00599C10.682 5.00511 10.3855 4.85558 10.1975 4.60251C9.86806 4.15931 9.45046 3.78912 8.97096 3.51524C8.49146 3.24136 7.96044 3.06973 7.41135 3.01115ZM19.1347 11.3508L11.7037 18.7105C11.314 19.0965 10.6861 19.0965 10.2964 18.7105L2.79935 11.2855C2.20729 10.7084 1.74085 10.0153 1.42931 9.24944C1.1172 8.48218 0.96733 7.65862 0.989141 6.8306C1.01095 6.00257 1.20397 5.18804 1.55605 4.43828C1.90812 3.68852 2.41162 3.01978 3.03484 2.47417C3.65806 1.92856 4.3875 1.5179 5.17723 1.26805C5.96696 1.0182 6.79986 0.934576 7.6235 1.02244C8.44713 1.1103 9.24365 1.36774 9.96291 1.77856C10.337 1.99221 10.6859 2.24493 11.0042 2.5318C11.3221 2.2484 11.6702 1.99891 12.0429 1.78814C12.7617 1.38168 13.5566 1.12796 14.3779 1.04284C15.1992 0.957725 16.0293 1.04305 16.8161 1.29349C17.6029 1.54392 18.3296 1.95406 18.9507 2.49825C19.5717 3.04244 20.0737 3.70896 20.4253 4.45609C20.7769 5.20322 20.9705 6.01488 20.994 6.84027C21.0174 7.66566 20.8703 8.48701 20.5618 9.25292C20.2532 10.0188 19.7899 10.7128 19.2008 11.2914C19.1794 11.3124 19.1574 11.3322 19.1347 11.3508Z"
            fill="#292929"
          />
        </svg>
      ),
    },
    {
      name: "Cart",
      icon: (
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path
            d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z"
            fill="#292929"
          />
        </svg>
      ),
    },
  ];

  const filters = [];

  return (
    <>
      <div className="navbar bg-base-100 flex align-center">
        <div className="navbar-start gap-4">
          {navBarStart.map((item) => (
            <div className="dropdown dropdown-start">
              <label tabIndex={0} className={item.className}>
                {item.icon ? item.icon : item.name}
              </label>
              {item.data && (
                <ul
                  tabIndex={0}
                  className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                >
                  {item.data.map((item) => (
                    <li>{item.name}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="navbar-center gap-4">
          {navBarCenter.map((item) => (
            <div className={item.className}>
              <label tabIndex={0} >
                {item.name}
              </label>
            </div>
          ))}
        </div>

        <div className="navbar-end">
          {navBarEnd.map((item) => (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                {item.icon}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
