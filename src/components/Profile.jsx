import React from "react";
import TopNav from "./TopNav";
import Image from "next/image";
import userImage from "../components/images/profileImage.png";
import crown from "../components/images/crown.png";
import coinImage from "../components/images/coin.png";

export default function Profile() {
  return (
    <div className="bg-[#560082] h-[195px] max-w-[375px] px-4 pt-3">
      <TopNav />
      <div className="pt-3">
        <section className="flex gap-x-4 items-center">
          <div>
            <Image src={crown} />
            <Image
              src={userImage}
              className="rounded-full border-2 border-white -mt-[9px] w-[68px] cursor-pointer"
            />
          </div>
          <div>
            <h1 className="font-sora text-xl font-bold">Linda</h1>
            <h2 className="text-sm font-medium">Solus Expert</h2>
            <p className="text-xs font-medium">0xCD...De90</p>
          </div>
        </section>

        <section className="flex justify-between items-center pt-4 pr-2">
          <div className="border-r border-r-white pr-6 text-center flex items-center gap-x-1">
            <section>
              <Image src={coinImage} />
            </section>
            <section>
              <h2 className="text-lg font-bold font-sora">1208</h2>
              <p className="text-xs text-center">SUS</p>
            </section>
          </div>
          <div className="border-r border-r-white text-center pr-6">
            <h2 className="text-lg font-bold font-sora">#2</h2>
            <p className="text-xs text-center">Highest Position</p>
          </div>
          <div className=" text-center">
            <h2 className="text-lg font-bold font-sora">Level 0</h2>
            <p className="text-xs text-center">Trading Level</p>
          </div>
        </section>
      </div>
    </div>
  );
}
