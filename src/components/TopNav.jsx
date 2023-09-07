import React from "react";
import Image from "next/image";
import backButton from "../components/images/backButton.png";
import editButton from "../components/images/edit.png";
import shareButton from "../components/images/shareIcon.png";

export default function TopNav() {
  return (
    <div className="flex items-center justify-between">
      <section className="flex items-center gap-x-2 cursor-pointer">
        <Image src={backButton} />
        <p>Back</p>
      </section>
      <section className="flex items-center gap-x-3 cursor-pointer">
        <Image src={editButton} />
        <Image src={shareButton} />
      </section>
    </div>
  );
}
