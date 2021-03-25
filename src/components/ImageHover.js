import React from "react";
import { Link } from "react-router-dom";
import "../styles/ImageHover.scss";

function ImageHover({ to, image, searchIcon, penIcon, binIcon }) {
  return (
    <div>
      <div className="">
        <div className="hovereffect">
          <img className="img-responsive img-thumbnail rounded h-60" src={image} alt=""/>
          <div className="overlay flex justify-center items-center">
            <div className="flex">
              <p className="p-2 hover:bg-blue-400 rounded-lg">
                <Link to={to}>{searchIcon}</Link>
              </p>
              <p className="p-2 hover:bg-blue-400 rounded-lg">
                <Link to={to}>{penIcon}</Link>
              </p>
              <p className="p-2 hover:bg-blue-400 rounded-lg">
                <Link to={to}>{binIcon}</Link>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageHover;
