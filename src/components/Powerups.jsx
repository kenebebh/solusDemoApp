import React from "react";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import ShopIcon from "./icons/shopIcon";
import ArrowRight from "./icons/ArrowRight";
import { PowerUpsData } from "@/dummyData";
import Image from "next/image";

export default function Powerups() {
  return (
    <div className="text-[#2B2828] mt-6">
      <div className="flex items-baseline gap-x-2">
        <h2 className="font-sora text-base font-bold underline">My Powerups</h2>
        <ArrowDownIcon />
      </div>
      <p className="text-sm">
        Power ups give you extra benefits for your trades
      </p>
      <div className="w-full mt-4">
        {PowerUpsData.map((powerup) => (
          <div className="flex items-center gap-x-14 mb-2 pr-2">
            <div className="flex justify-between items-center">
              <Image src={powerup.imgSrc} />
              <div className="">
                <h2 className="text-base text-primary font-sora font-semibold">
                  {powerup.powerupTitle}
                </h2>
                <p className="text-xs">{powerup.powerupText}</p>
              </div>
            </div>
            <button className="bg-bgButton text-white rounded-md px-2 border-2 font-bold border-bgButton">
              {powerup.powerUpStatus}
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-6 text-sm font-bold text-white mb-6">
        <button className="flex items-center h-10 bg-gradient-to-r from-[#560082] to-[#4B00E1] w-4/6 justify-between px-4 border rounded-lg">
          <section className="flex items-center gap-x-2">
            <ShopIcon />
            Access the Shop
          </section>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
