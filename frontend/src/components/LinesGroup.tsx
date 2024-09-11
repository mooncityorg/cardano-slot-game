/* eslint-disable @typescript-eslint/ban-types */
import { FC } from "react";
import { MinusIcon, PlusIcon } from "./SvgIcons";

interface LinesGroupProps {
  title: string;
  lines: number;
  setLines: Function;
}

const LinesGroup: FC<LinesGroupProps> = ({ title, lines, setLines }) => {
  return (
    <div className="flex flex-col items-center mt-4 input-group " title={title}>
      <p className="text-[#FFEB3B] uppercase font-bold">lines</p>
      <div className="flex items-center mt-1">
        <button
          className="bg-yellow-500 text-white w-8 h-10 text-[24px] rounded-l-3xl grid place-content-center hover:bg-yellow-600 duration-300 transition-all"
          disabled={lines === 1}
          onClick={() => setLines((prev: number) => prev - 1)}
        >
          <MinusIcon color="#fff" />
        </button>
        <input
          className="value-input w-[72px] h-10 text-center text-[20px] font-bold text-white border-t-[1px] border-b-[1px] border-yellow-300  bg-[#00000099]"
          step={1}
          value={lines}
          onChange={(e) => setLines(e.target.value)}
          type="number"
          min={1}
        />
        <button
          className="bg-yellow-500 text-white w-8 h-10 text-[24px] rounded-r-3xl grid place-content-center hover:bg-yellow-600 duration-300 transition-all"
          onClick={() => setLines((prev: number) => prev + 1)}
        >
          <PlusIcon color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default LinesGroup;
