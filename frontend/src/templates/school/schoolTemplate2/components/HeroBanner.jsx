import React from "react";

export default function HeroBanner({
  // src = "https://hermanngmeinerschoolbhimtal.org/static/media/banner2.beaead42e2f74021baaa.webp",
  src = "",
}) {
  console.log(src);
  return (
    <div className=" w-full h-full ">
      {/* Background Image */}
      <img src={src} alt="School Campus Banner" className=" w-full h-full" />
    </div>
  );
}
