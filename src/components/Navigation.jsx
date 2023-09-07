import React from "react";
import Image from "next/image";
import Feed from "../components/images/feed.png";
import Leaderboard from "../components/images/leaderboard.png";
import Markets from "../components/images/markets.png";
import Portfolio from "../components/images/portfolio.png";
import Profile from "../components/images/profile.png";

export default function Navigation() {
  return (
    <div className="sticky bg-white h-[50px] w-full bottom-0 border-t border-gray-400">
      <div className="flex justify-between items-center px-5 py-1">
        <Image src={Feed} className="cursor-pointer" />
        <Image src={Markets} className="cursor-pointer" />
        <Image src={Portfolio} className="cursor-pointer" />
        <Image src={Leaderboard} className="cursor-pointer" />
        <Image src={Profile} className="cursor-pointer" />
      </div>
    </div>
  );
}
