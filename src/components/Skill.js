import React from "react";

const Skill = ({ title, images }) => {
  return (
    <div className="flex flex-col bg-white p-8 text-black gap-4">
      <h1 className="font-bold text-xl">{title}</h1>
      <ul className="flex gap-4">
        {images.map((src, idx) => {
          return (
            <img
              src={src}
              alt={title}
              key={idx}
              className="w-[150px] h-[50px]"
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Skill;
