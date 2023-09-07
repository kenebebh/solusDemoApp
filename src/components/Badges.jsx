import React from "react";
import { BadgesData } from "@/dummyData";
import Image from "next/image";
import ArrowDownIcon from "./icons/ArrowDownIcon";

export default function Badges() {
  console.log(BadgesData);
  return (
    <div className="text-[#2B2828] mt-3">
      <div className="flex items-baseline gap-x-2">
        <h2 className="font-sora text-base font-bold underline">My Badges</h2>
        <ArrowDownIcon />
      </div>
      <p className="text-sm">
        Badges are awarded for your expertise within Solus
      </p>
      <div className="flex mt-3">
        {BadgesData.map((badge) => (
          <div className="flex items-center gap-x-2">
            <Image src={badge.imgSrc} className="" />
            <div className="">
              <h2 className="text-base text-primary font-sora font-semibold">
                {badge.badgeTitle}
              </h2>
              <p className="text-xs">{badge.badgeText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
