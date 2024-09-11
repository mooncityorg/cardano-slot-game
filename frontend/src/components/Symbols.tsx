/* eslint-disable react-refresh/only-export-components */
import Alien from "../assets/images/symbols/alien.png";
import Commet from "../assets/images/symbols/commet.png";
import Jetpack from "../assets/images/symbols/jetpack.png";
import Netbula from "../assets/images/symbols/netbula.png";
import Rocket from "../assets/images/symbols/rocket.png";
import Saturn from "../assets/images/symbols/saturn.png";

import NumImage1 from "../assets/images/symbols/1.png";
import NumImage2 from "../assets/images/symbols/2.png";
import NumImage3 from "../assets/images/symbols/3.png";
import NumImage4 from "../assets/images/symbols/4.png";
import NumImage5 from "../assets/images/symbols/5.png";
import NumImage6 from "../assets/images/symbols/6.png";
import NumImage7 from "../assets/images/symbols/7.png";
import NumImage8 from "../assets/images/symbols/8.png";
import NumImage9 from "../assets/images/symbols/9.png";

import ImageA from "../assets/images/symbols/a.png";
import ImageB from "../assets/images/symbols/b.png";
import ImageC from "../assets/images/symbols/c.png";
import ImageD from "../assets/images/symbols/d.png";
import ImageE from "../assets/images/symbols/e.png";
import ImageF from "../assets/images/symbols/f.png";
import ImageG from "../assets/images/symbols/g.png";
import ImageH from "../assets/images/symbols/h.png";
import ImageI from "../assets/images/symbols/i.png";

export interface SymbolItem {
  label: string;
  media: JSX.Element;
  weight: number;
  reward: number;
}

export const SYMBOLS: SymbolItem[] = [
  {
    label: "1",
    media: <img src={NumImage1} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "2",
    media: <img src={NumImage2} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "3",
    media: <img src={NumImage3} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "4",
    media: <img src={NumImage4} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "5",
    media: <img src={NumImage5} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "6",
    media: <img src={NumImage6} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "7",
    media: <img src={NumImage7} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "8",
    media: <img src={NumImage8} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "9",
    media: <img src={NumImage9} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "A",
    media: <img src={ImageA} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "B",
    media: <img src={ImageB} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "C",
    media: <img src={ImageC} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "D",
    media: <img src={ImageD} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "E",
    media: <img src={ImageE} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "F",
    media: <img src={ImageF} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "G",
    media: <img src={ImageG} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "H",
    media: <img src={ImageH} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "I",
    media: <img src={ImageI} className="w-full h-full" alt="" />,
    weight: 0,
    reward: 0,
  },
  {
    label: "Alien",
    media: <img src={Alien} className="w-full h-full" alt="" />,
    weight: 1,
    reward: 1,
  },
  {
    label: "Commet",
    media: <img src={Commet} className="w-full h-full" alt="" />,
    weight: 1,
    reward: 1,
  },
  {
    label: "Jetpack",
    media: <img src={Jetpack} className="w-full h-full" alt="" />,
    weight: 2,
    reward: 1,
  },
  {
    label: "Netbula",
    media: <img src={Netbula} className="w-full h-full" alt="" />,
    weight: 1,
    reward: 1,
  },
  {
    label: "Rocket",
    media: <img src={Rocket} className="w-full h-full" alt="" />,
    weight: 1,
    reward: 1,
  },
  {
    label: "Saturn",
    media: <img src={Saturn} className="w-full h-full" alt="" />,
    weight: 1,
    reward: 1,
  },
  ///////////////////////////////////

  {
    label: "Alien",
    media: <img src={Alien} className="w-full h-full" alt="" />,
    weight: 1,
    reward: 1,
  },
  {
    label: "Commet",
    media: <img src={Commet} className="w-full h-full" alt="" />,
    weight: 1,
    reward: 1,
  },
  {
    label: "Jetpack",
    media: <img src={Jetpack} className="w-full h-full" alt="" />,
    weight: 2,
    reward: 1,
  },
  {
    label: "Netbula",
    media: <img src={Netbula} className="w-full h-full" alt="" />,
    weight: 1,
    reward: 1,
  },
  {
    label: "Rocket",
    media: <img src={Rocket} className="w-full h-full" alt="" />,
    weight: 1,
    reward: 1,
  },
  {
    label: "Saturn",
    media: <img src={Saturn} className="w-full h-full" alt="" />,
    weight: 1,
    reward: 1,
  },
];
