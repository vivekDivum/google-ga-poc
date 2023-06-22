import { useEffect, useState } from "react";

function App() {
  const [showUsers, setShowUsers] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const userList = [
    {
      name: "Vivek",
      gaTrackingID: "",
    },
    {
      name: "Aayan",
      gaTrackingID: "",
    },
  ];

  const productList = [
    {
      id: 1,
      name: "iPhone14",
      price: "$500",
    },
    {
      id: 2,
      name: "MacBookAir M2",
      price: "$800",
    },
    {
      id: 3,
      name: "iPad Air",
      price: "$700",
    },
    {
      id: 4,
      name: "Macbook Pro",
      price: "$2000",
    },
  ];

  useEffect(() => {
    console.log("selectedUsers:", selectedUsers);
    console.log(userList[0]?.name);
  }, [selectedUsers]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-[550px] p-5 mx-auto w-full ">
        <h1 className="p-5 text-[#1e1e1e] text-3xl font-semibold text-center">
          Dynamic Google Analytics POC
        </h1>

        {/* select bar */}
        <div className="flex justify-between w-full items-center mt-20">
          <div className="relative">
            <button
              onClick={() => setShowUsers(!showUsers)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-xl"
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
                <div className="absolute z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {userList?.map((data) => {
                      return (
                        <button
                          key={data?.name}
                          className="block w-full text-left cursor-pointer"
                          onClick={() => {
                            if (selectedUsers === data?.name) {
                              setSelectedUsers(null);
                            } else setSelectedUsers(data?.name);
                          }}
                        >
                          <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-lg">
                            {data?.name}
                          </span>
                        </button>
                      );
                    })}
                  </ul>
                </div>
              </>
            )}
          </div>
          <h2>
            <span className="text-gray-500 font-semibold">Selected User: </span>
            <span className="text-2xl ml-5">
              {" "}
              {selectedUsers ? selectedUsers : "No user selected"}
            </span>
          </h2>
        </div>

        {/* product list */}
        {selectedUsers && (
          <div className="mt-10 grid grid-cols-2 gap-5">
            {productList?.map((product) => {
              return (
                <div
                  key={product?.id}
                  className="border p-5 rounded-lg bg-white hover:shadow-lg transition-all"
                >
                  <h1 className="text-2xl"> {product?.name}</h1>
                  <h1 className="flex gap-2 text-lg my-3">
                    <span>Price:</span>
                    <span className="font-semibold">{product?.price}</span>
                  </h1>

                  <button className="bg-blue-700 hover:bg-blue-800 transition-all text-white px-5 py-2 rounded-lg active:scale-95">
                    Buy now
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
