import React from "react";
import Card from "react-bootstrap/Card";


const FinishSelectTempCard = ({ data }) => {
  const { name, src } = data;

  return (
    <Card
      style={{ width: "150px", height: "" }}
      className="group/item overflow-hidden relative justify-center  rounded-lg cursor-pointer bg-white drop-shadow-lg m-[2rem]"
    >
      <div className=" object-contain overflow-hidden">
        <div className="wrapper bg-white p-4 object-cover">
          <Card.Img
            variant="top"
            src={src}
            className="object-contain rounded-lg   "
          />
        </div>
      </div>
      <div className="relative flex justify-center">


        <div className="relative text-center">
          <p className="text-3xl pt-2 text-yellow-300">{name}</p>
         
        </div>
      </div>
    </Card>
  );
};

export default FinishSelectTempCard;
