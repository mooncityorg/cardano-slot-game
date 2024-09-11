/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState, useEffect } from "react";
import CoinValue from "./CoinValue";
import SlotCell from "./SlotCell";
import SpinIcon from "../assets/images/spin.png";
import TitleImage from "../assets/images/title.png";
import InfoBtnBg from "../assets/images/info.png";
import { SYMBOLS, SymbolItem } from "./Symbols";
import WinsChart from "./WinsChart";
import { sleep } from "../utils/util";
import WinPopup from "./WinPopup";
import { Howl } from "howler";
import PlaySound from "../assets/sounds/play-3.wav";
import GameBorder from "../assets/images/border.png";
import { CoinIcon } from "./SvgIcons";
import { DELAY_TIME, SPIN_TIME } from "../config";

const SlotsContainer: React.FC = () => {
  const [positionY, setPositionY] = useState(0);
  const [blur, setBlur] = useState(10);
  const [randomFlag, setRandomFlag] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [coinValue, setCoinValue] = useState(3);

  const [isStarted, setIsStarted] = useState(false);

  const [isWinsChart, setIsWinsChart] = useState(false);
  const [isWinModal, setIsWinModal] = useState(false);

  const [isSpinMoveEnd, setIsSpinMoveEnd] = useState(true);
  const [rewardSymbols, setRewardSymbols] = useState<SymbolItem[]>([]);

  const playSound = new Howl({
    src: [PlaySound],
  });

  const cells = useMemo(() => {
    const list: SymbolItem[][] = [];
    Array.from({ length: 5 }, () => {
      const cellRow = SYMBOLS.concat(SYMBOLS).slice(); // Create a copy of SYMBOLS array
      // A function that randomly changes the order of cellRow items
      for (let i = cellRow.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cellRow[i], cellRow[j]] = [cellRow[j], cellRow[i]];
      }
      list.push(cellRow);
    });

    const items: SymbolItem[] = [];

    for (const subList of list) {
      for (let i = 0; i < subList.length; i++) {
        if (subList[i].label === "Jetpack" && i > subList.length - 4) {
          items.push(subList[i]);
        }
      }
    }
    setRewardSymbols(items);
    return list;
  }, [randomFlag]);

  useEffect(() => {
    console.log("jetpackCount", rewardSymbols.length);

    const runWinEffect = async () => {
      if (isStarted && rewardSymbols.length > 0 && !isReset) {
        console.log("win modal show!");
        await sleep(SPIN_TIME);
        setIsSpinMoveEnd(true);
        playSound.stop();
        await sleep(DELAY_TIME);
        setIsSpinMoveEnd(true);
        setIsWinModal(true);
      }
    };
    runWinEffect();
  }, [rewardSymbols]);

  const onReset = () => {
    setIsSpinMoveEnd(true);
    playSound.stop();
    setIsReset(true);
    setPositionY(0);
  };

  const handleSpin = async () => {
    console.log("spin!");
    setIsStarted(true);
    onReset();
    await sleep(1);
    playSound.play();
    setIsSpinMoveEnd(false);
    setIsReset(false);
    setBlur(0);
    setRandomFlag(!randomFlag);
    setPositionY(8550);
    await sleep(8000);
    setIsSpinMoveEnd(true);
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full backdrop-blur-md">
        <div className="flex items-center justify-center w-full pb-16 hue-rotate">
          <img src={TitleImage} className="h-[84px]" alt="" />
        </div>
        <div className="w-[800px] relative ">
          <img
            src={GameBorder}
            className="absolute max-w-[915px] w-[915px] h-[585px] -top-[62px] -left-[55px] z-20 hue-rotate"
          />

          <button
            className="absolute left-0 z-30 -top-10 zoom-in"
            onClick={() => setIsWinsChart(true)}
          >
            <img src={InfoBtnBg} className="w-8 h-8" alt="" />
          </button>
          <h5 className="absolute z-30 text-white -translate-x-1/2 left-1/2 -top-11">
            Win Win
          </h5>
          {/* <img
            src={Spaceman}
            className="h-[200px] absolute -right-12 -top-[76px]"
            alt=""
          /> */}
          <div
            title="Your balance"
            className="left-24 text-[16px] font-bold text-yellow-300 absolute z-30 -bottom-10 flex items-center justify-center uppercase leading-[16px] w-[160px] text-center"
          >
            <CoinIcon />
            &nbsp;<span>42,342</span>
          </div>

          <CoinValue
            title="Coin value"
            coinValue={coinValue}
            className="absolute right-[80px] w-[200px] z-30 -bottom-11"
            setCoinValue={setCoinValue}
          />
          <button
            title="Spin"
            className="grid w-[100px] h-[100px] mt-5 transition-all duration-300 bg-yellow-500 rounded-full place-content-center hover:bg-yellow-600 hover:scale-[1.1] hover:-rotate-45 disabled:cursor-not-allowed absolute left-1/2 z-30 -bottom-[60px] -translate-x-1/2"
            onClick={handleSpin}
            disabled={!isSpinMoveEnd}
          >
            <img src={SpinIcon} alt="" />
          </button>
          <div className="flex gap-1 h-[460px] w-[800px] cell-border relative z-10">
            {/* <span className="border-span" />
            <span className="border-span" />
            <span className="border-span" />
            <span className="border-span" /> */}
            {cells.map((item, key) => (
              <SlotCell
                key={key}
                targetIndex={8}
                y={positionY}
                delay={0.2 * (key + 1)}
                blur={blur}
                symbols={item}
                isReset={isReset}
                isSpinMoveEnd={isSpinMoveEnd}
              />
            ))}
          </div>
        </div>
      </div>
      <WinsChart isOpen={isWinsChart} onClose={() => setIsWinsChart(false)} />
      <WinPopup
        isOpen={isWinModal}
        onClose={() => setIsWinModal(false)}
        items={rewardSymbols}
        onReset={onReset}
      />
    </>
  );
};

export default SlotsContainer;
