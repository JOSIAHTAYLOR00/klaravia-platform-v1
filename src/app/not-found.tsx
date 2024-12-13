import react from "react";
import Image from "next/image";
import notFoundPng from "@/app/not-found.png";

export default function () {
  return <Image src={notFoundPng} alt="404 page not found" />;
}
