import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Loging = () => {
  const [one, two] = useState(false);
  const next = () => {
    two(!one);
  };
  return (
    <>
      <div className="w-full ">
     
        <div className="w-full h-full flex justify-center flex-col items-center gap-5 mt-[250px]  ">
        <div className="flex justify-center items-center">
          <input
            className="w-[350px] h-[40px] border-2 text-white border-[#fff] rounded-md bg-black"
            type="text"
            placeholder="Your name"
          />
        </div>
          <div className=" relative">
            {one ? (
              <FaEye
                onClick={next}
                className="text-white absolute top-[50%] right-5 translate-y-[-50%] "
              />
            ) : (
              <FaEyeSlash
                onClick={next}
                className="text-white absolute top-[50%] right-5 translate-y-[-50%] "
              />
            )}
            <FaEyeSlash
              onClick={next}
              className="text-white absolute top-[50%] right-5 translate-y-[-50%] "
            />
            <input
              className=" w-[350px] h-[40px] border-2 text-white border-[#fff] rounded-md bg-black "
              type={one ? "text" : "password"}
              placeholder="Your password"
            />
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Loging;
