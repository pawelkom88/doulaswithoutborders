import React from "react";
const currentYear: number = new Date().getFullYear();

export default function Copyright() {
  return (
    <div className="mx-auto w-full bg-sky-50 p-6 px-4 text-center lg:px-16">
      <span className="mt-2 text-sm font-light text-gray-500">Copyright {currentYear}</span>
    </div>
  );
}
