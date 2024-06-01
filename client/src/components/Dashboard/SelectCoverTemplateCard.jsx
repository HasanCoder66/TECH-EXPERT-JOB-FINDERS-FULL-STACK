import React from "react";
import Card from "react-bootstrap/Card";

const SelectCoverTemplateCard = ({ data, key }) => {
  const { name, src, amount } = data;

  return (
    <Card
      key={key}
      // style={{ width: "180px" }}
      className="w-full group/item overflow-hidden relative justify-center  rounded-lg cursor-pointer bg-white drop-shadow-lg m-[2rem]"
    >
      <div className=" object-contain overflow-hidden">
        <div className="wrapper bg-white p-4 object-cover">
          <Card.Img
            variant="top"
            src={src}
            className="object-contain rounded-lg  "
          />
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="relative text-center">
          <p className="text-3xl pt-2 text-yellow-300">{name}</p>
          <p className="text-3xl pt-2 text-theme-black">{123}</p>
        </div>
      </div>

      <div className="selectTemplateButton group-hover/item:flex hidden absolute top-0 left-0 w-full h-full border-[0.2rem] border-neutral-700 items-center justify-center">
        <Link to={route}>
          <button className="selectTemplateButton bg-neutral-700 py-[0.8rem] px-[1.5rem] text-[1.6rem] leading-[1.6rem] text-white rounded-md ">
            Select
          </button>
        </Link>
      </div>
    </Card>
  );
};

export default SelectCoverTemplateCard;
