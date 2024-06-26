import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = ({ width }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {width > 480 ? (
            <BallCanvas icon={technology.icon} />
          ) : (
            <div className="flex items-center justify-center h-full rounded-full shadow-md bg-[#040712] shadow-black">
              <img src={technology.icon} className="w-20 h-20" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech);
