import React, { ReactNode } from "react";
import { CloseIcon } from "./SvgIcons";
import Alien from "../assets/images/symbols/alien.png";
import Commet from "../assets/images/symbols/commet.png";
import Jetpack from "../assets/images/symbols/jetpack.png";
import Netbula from "../assets/images/symbols/netbula.png";
import Rocket from "../assets/images/symbols/rocket.png";
import Saturn from "../assets/images/symbols/saturn.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const WinsChart: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center text-white">
      <div className="fixed inset-0 top-0 left-0 w-screen h-screen backdrop-blur-lg "></div>
      <div className="bg-[#000] rounded-lg shadow-lg w-[600px] relative">
        <button
          className="absolute mt-3 mr-4 text-gray-700 top-2 right-2 hover:text-gray-900"
          onClick={onClose}
        >
          <CloseIcon color="#fff" />
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-black">Wins Chart</h2>
          <div className="mt-2">
            <table className="w-full">
              <thead className="text-[#ad14cf]">
                <tr>
                  <th colSpan={3} className="border-b border-[#fff] py-2 w-1/2">
                    Symbols
                  </th>
                  <th className="border-b border-[#fff] py-2 w-1/4">Win</th>
                  <th className="border-b border-[#fff] py-2 w-1/4">
                    Payout %
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Alien} className="w-12 h-12" alt="" />
                  </td>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Alien} className="w-12 h-12" alt="" />
                  </td>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Alien} className="w-12 h-12" alt="" />
                  </td>
                  <td className="text-center border-b border-[#ffffff65]">
                    10x
                  </td>
                  <td className="text-center border-b border-[#ffffff65]">
                    0.01%
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Commet} className="w-12 h-12" alt="" />
                  </td>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Commet} className="w-12 h-12" alt="" />
                  </td>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Commet} className="w-12 h-12" alt="" />
                  </td>
                  <td className="text-center border-b border-[#ffffff65]">
                    5x
                  </td>
                  <td className="text-center border-b border-[#ffffff65]">
                    0.01%
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Jetpack} className="w-12 h-12" alt="" />
                  </td>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Jetpack} className="w-12 h-12" alt="" />
                  </td>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Jetpack} className="w-12 h-12" alt="" />
                  </td>
                  <td className="text-center border-b border-[#ffffff65]">
                    3.6x
                  </td>
                  <td className="text-center border-b border-[#ffffff65]">
                    0.01%
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Netbula} className="w-12 h-12" alt="" />
                  </td>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Netbula} className="w-12 h-12" alt="" />
                  </td>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Netbula} className="w-12 h-12" alt="" />
                  </td>
                  <td className="text-center border-b border-[#ffffff65]">
                    3x
                  </td>
                  <td className="text-center border-b border-[#ffffff65]">
                    0.01%
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Rocket} className="w-12 h-12" alt="" />
                  </td>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Rocket} className="w-12 h-12" alt="" />
                  </td>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Rocket} className="w-12 h-12" alt="" />
                  </td>
                  <td className="text-center border-b border-[#ffffff65]">
                    2x
                  </td>
                  <td className="text-center border-b border-[#ffffff65]">
                    0.01%
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Saturn} className="w-12 h-12" alt="" />
                  </td>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Saturn} className="w-12 h-12" alt="" />
                  </td>
                  <td className="p-3 border-b border-[#ffffff65]">
                    <img src={Saturn} className="w-12 h-12" alt="" />
                  </td>
                  <td className="text-center border-b border-[#ffffff65]">
                    1.5x
                  </td>
                  <td className="text-center border-b border-[#ffffff65]">
                    0.01%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinsChart;
