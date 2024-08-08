import React from "react";

const Card = (Props) => {
  return (
    <div>
      <div className="w-[300px] rounded-md border o	mt-4">
        <img
          src={Props.pic}
          alt="placeholder for img"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-2">
          <h1 className="text-lg font-semibold">{Props.uni_name}</h1>
          <h1 className="text-base ">{Props.uni_country}</h1>
          {/* <p className="mt-1 text-sm text-gray-600">{Props.uni_province}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
