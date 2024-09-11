/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, useEffect } from "react";
import { CloseIcon } from "./SvgIcons";
import { SymbolItem } from "./Symbols";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import WinSound from "../assets/sounds/regular-win.wav";
import ClapSound from "../assets/sounds/clap.wav";
import WinBg from "../assets/images/cong-bg.png";

import { Howl } from "howler";

interface ModalProps {
  isOpen: boolean;
  items: SymbolItem[];
  onClose: () => void;
  onReset: () => void;
  children?: ReactNode;
}

const WinPopup: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  items,
  onReset,
}) => {
  const { width, height } = useWindowSize();
  const winSound = new Howl({
    src: [WinSound],
  });

  const clapSound = new Howl({
    src: [ClapSound],
  });

  useEffect(() => {
    console.log(items, isOpen);
  }, [items, isOpen]);

  useEffect(() => {
    if (isOpen) {
      winSound.play();
      clapSound.play();
    } else {
      winSound.stop();
      clapSound.stop();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center text-white">
      {isOpen && <Confetti width={width} height={height} />}
      <div className="fixed inset-0 top-0 left-0 w-screen h-screen backdrop-blur-lg "></div>
      <div className="w-[640px] h-[400px] relative">
        <img
          src={WinBg}
          className="absolute w-full h-full hue-rotate-1"
          alt=""
        />
        <button
          className="absolute z-30 mt-3 mr-4 text-gray-700 top-2 right-2 hover:text-gray-900"
          onClick={() => {
            onReset();
            winSound.stop();
            clapSound.stop();
            onClose();
          }}
        >
          <CloseIcon color="#fff" />
        </button>
        <div className="relative z-20 flex flex-col items-center justify-center h-full p-10">
          <h2 className="font-black text-[26px] text-center capitalize text-yellow-200">
            congratulation!
          </h2>
          <div className="flex justify-center gap-6 mt-6">
            <div className="inline-flex gap-4 max-w-[320px] justify-center flex-wrap">
              {items.map((item, key) => (
                <div
                  className="w-[70px] h-[70px] border-2 border-yellow-200 rounded-2xl p-1 shadow-md"
                  key={key}
                >
                  <div className="w-[70px] h-[70px] zoom2">{item.media}</div>
                </div>
              ))}
            </div>
            <div className="text-yellow-200 font-bold text-[70px] leading-[70px]">
              {(items.length * 1.2).toFixed(1)}X
            </div>
          </div>
          <div className="mt-5 text-center">
            <button
              className="px-4 uppercase bg-yellow-300 w-[200px] h-10 rounded- text-black font-black text-lg"
              onClick={() => {
                onReset();
                winSound.stop();
                clapSound.stop();
                onClose();
              }}
            >
              continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinPopup;
