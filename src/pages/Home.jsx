import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userList } from "../helpers/users";
import { userAtom } from "../state_management/userAtom";

const Home = () => {
  const [showUsers, setShowUsers] = useState(false);
  const [, setSelectedUsers] = useRecoilState(userAtom);
  const [spinStatus, setSpinStatus] = useState(false);

  function refreshPage() {
    setSpinStatus(true);

    setTimeout(() => {
      setSpinStatus(false);
      window.location.reload(false);
    }, 1000);
  }

  return (
    <div>
      <div className="max-w-[550px] p-5 mx-auto w-full ">
        <h1 className="p-5 text-[#1e1e1e] text-3xl font-semibold text-center">
          Dynamic Google Analytics POC
        </h1>

        {/* select bar */}
        <div className="flex justify-center gap-5  w-full items-center mt-20">
          <div className="relative">
            <button
              onClick={() => setShowUsers(!showUsers)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-8 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl"
              type="button"
            >
              Select User{" "}
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {showUsers && (
              <>
                {/* overlay */}
                <div
                  className="inset-0 fixed z-[5]"
                  onClick={() => setShowUsers(false)}
                ></div>
                {/* drop down */}
                <div className="absolute z-10  bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 dark:bg-gray-700">
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {userList?.map((data) => {
                      return (
                        <Link
                          to={"/user/" + data?.gaTrackingID}
                          key={data?.name}
                          className="block w-full text-left cursor-pointer"
                          onClick={() => {
                            setSelectedUsers(data);
                            setShowUsers(false);
                          }}
                        >
                          <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-lg">
                            {data?.name}
                          </span>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              </>
            )}
          </div>

          <button
            onClick={refreshPage}
            className={` ${spinStatus ? "animate-spin" : ""} text-blue-800`}
            title="reload page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
