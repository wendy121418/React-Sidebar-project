import React from "react";
import AvatarRight from "./AvatarRight";

function Header() {
  return (
    <>
      <div className="header border-b-4 flex border-red-700 py-2 pl-5">
        <div className="w-5/6">
          <strong>
            <h1 className="headtext text-lg text-red-500">TOKYO TEMPURA</h1>
          </strong>
          <strong>
            <h1 className="text-lg">CLOUD KITCHEN</h1>
          </strong>
        </div>
        <div className="flex justify-end items-center w-full pr-5">
          <AvatarRight />
        </div>
      </div>
    </>
  );
}

export default Header;
