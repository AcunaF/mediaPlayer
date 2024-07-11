import React from "react";
import { TbBackground } from "react-icons/tb";

import { useNavigate } from "react-router-dom";

const Ebooks = () => {
  const navigate = useNavigate();
  const handleBaaack = () => {
    navigate("/principal");
  };
  return (
    <>
      <div>
        <h1>E-books</h1>
        <button onClick={handleBaaack}>
          Back to principal <TbBackground></TbBackground>
        </button>
      </div>
    </>
  );
};

export default Ebooks;
