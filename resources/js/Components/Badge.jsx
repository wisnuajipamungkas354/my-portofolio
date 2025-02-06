import React from "react";

export default function Badge({children, bgColor = 'bg-sky-500', textColor = 'text-white'}) {
  return (
    <span className={`rounded-xl ${bgColor} p-1 px-2 text-xs ${textColor}`}>{children}</span>
  );
}