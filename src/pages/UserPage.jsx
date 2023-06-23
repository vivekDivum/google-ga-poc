import ReactGA from "react-ga4";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { productList } from "../helpers/products";
import { useRecoilState } from "recoil";
import { userAtom } from "../state_management/userAtom";

const UserPage = () => {
  // global variables
  const [selectedUsers] = useRecoilState(userAtom);

  // local variables
  const params = useParams();

  // lifecycle calls
  useEffect(() => {
    ReactGA.initialize(params?.user_id);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Landed on site",
    });
  }, [params?.user_id]);
  return (
    <div className="mx-auto w-[90%] md:w-[60%]">
      {/* username and google analytics ID */}
      <div className="flex justify-center items-center gap-2  py-5 ">
        <h1 className="w-fit text-2xl font-medium ">{selectedUsers?.name}</h1>
        <h1 className="font-semibold text-2xl">:</h1>
        <h1 className="w-fit text-2xl font-medium">
          {selectedUsers?.gaTrackingID}
        </h1>
      </div>

      {/* product list */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {productList?.map((product) => {
          return (
            <div
              key={product?.id}
              className="border p-5 rounded-lg bg-white hover:shadow-lg transition-all"
            >
              <h1 className="text-2xl"> {product?.name}</h1>
              <h1 className="flex gap-2 text-lg my-3">
                <span>Price:</span>
                <span className="font-semibold">$ {product?.price}</span>
              </h1>
              {/* buy button handler */}
              <button
                onClick={() => {
                  ReactGA.event({
                    category: product?.name,
                    action: "buy button cicked",
                    label: "homepage product list",
                    value: product?.price,
                  });
                }}
                className="bg-blue-700 hover:bg-blue-800 transition-all text-white px-5 py-2 rounded-lg active:scale-95"
              >
                Buy now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserPage;
