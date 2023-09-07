import React from "react";

export default function AppTabs() {
  return (
    <div className="flex gap-x-2">
      <button className="text-primary border border-primary font-medium px-2 rounded-md">
        Investment
      </button>
      <button className="bg-bgButton text-white rounded-md px-2 border-2 border-bgButton">
        Utility
      </button>
    </div>
  );
}
