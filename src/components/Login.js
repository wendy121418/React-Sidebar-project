import React from "react";
import image from "../images/image1.PNG";
import bg from "../images/bgbackend.png";

function Login() {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center" }} className="app-main h-screen w-full flex justify-center items-center bg-blue-50">
        
        <form action="" className="form p-6 my-10 relative w-1/4 bg-blue-50">
        
            <div className="w-full flex justify-center"><img src={image} alt="" width="120" height="120" /></div>
        
          <div className="py-3">
            <p className="text-lg text-gray-900 font-semibold text-center">
              Login to Tokyo Tempura
            </p>
            <p className="text-lg text-gray-900 font-semibold text-center">
              Cloud Kitchen Backoffice Portal
            </p>
          </div>
          <div className="flex space-x-5 mt-3 py-1">
            <input
              type="text"
              name=""
              id=""
              placeholder="Username"
              className="border border-gray-400 rounded p-2  w-full"
            />
          </div>
          <input
            type="password"
            name=""
            id=""
            placeholder="********"
            className="border border-gray-400 rounded p-2 w-full mt-3"
          />
          <div className="flex items-baseline space-x-2 mt-2 py-3">
            <input type="checkbox" name="" id="" className="inline-block" />
            <p className="text-gray-600 text-sm">Remember Me</p>
          </div>
          <input
            type="submit"
            value="Submit"
            className="w-full mt-6 bg-gray-800 hover:bg-black text-white font-semibold p-3"
          />
        </form>
      </div>
    </>
  );
}

export default Login;
