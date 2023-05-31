import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Footer() {
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(true);
  };

  const handleCloseClick = () => {
    setShowDiv(false);
  };

  return (
    <>
      <div className="flex justify-center p-4 cursor-pointer">
        © 2023 -
        <a className="pl-1" onClick={handleButtonClick}>
          {" "}
          INFORMATIONS LÉGALES
        </a>
      </div>
      <div>
        {showDiv && (
          <div className="w-full h-full md:w-auto md:h-auto border-yellow-500 border-2 border-opacity-80 rounded-3xl z-50 bg-black text-white fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 animate-fade-in">
            <div className="p-5">
              <div className="flex justify-between">
                <h1 className="m-4 text-2xl">Mentions légales</h1>
                <AiOutlineCloseCircle
                  className="m-4 cursor-pointer"
                  size={32}
                  onClick={handleCloseClick}
                ></AiOutlineCloseCircle>
              </div>
              <div className="m-4">

              <p>Éditeur du site Théophile Lioppé</p>
              <p>
                Adresse : 1475 rue du maréchal fosh Le Trait
              </p>
              <p>
                Numéro de TVA intracommunautaire 
              </p>
              <p>
                Hébergeur du site 
              </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
