/* eslint-disable @typescript-eslint/ban-types */
import { FC } from "react";
import { MinusIcon, PlusIcon } from "./SvgIcons";

interface CoinValueProps {
  title: string;
  coinValue: number;
  setCoinValue: Function;
  className: string;
}

const CoinValue: FC<CoinValueProps> = ({
  title,
  coinValue,
  setCoinValue,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-center input-group ${className}`}
      title={title}
    >
      <button
        className="text-white w-8 h-6 text-[24px] rounded-l-3xl grid place-content-center hover:bg-yellow-600 duration-300 transition-all"
        disabled={coinValue === 0}
        onClick={() => setCoinValue((prev: number) => prev - 0.1)}
      >
        <MinusIcon color="#fff" />
      </button>
      <input
        className="value-input w-[72px] text-center py-0.5 text-[16px] font-bold text-white border border-yellow-300  bg-[#00000099]"
        step={0.1}
        value={coinValue}
        onChange={(e) => setCoinValue(e.target.value)}
        type="number"
        min={0}
      />
      <button
        className="text-white w-8 h-6 text-[24px] rounded-r-3xl grid place-content-center hover:bg-yellow-600 duration-300 transition-all"
        onClick={() => setCoinValue((prev: number) => prev + 0.1)}
      >
        <PlusIcon color="#fff" />
      </button>
    </div>
  );
};

export default CoinValue;
