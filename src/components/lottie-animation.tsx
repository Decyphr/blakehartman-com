"use client";

import Lottie from "react-lottie";

import mobileAnimation from "~/lotties/mobile.json";
import softwareAnimation from "~/lotties/software.json";
import websiteAnimation from "~/lotties/websites.json";

interface Props {
  animation: "website" | "software" | "mobile";
}

export function LottieAnimation({
  animation,
}: Props) {
  const anims: Record<"website" | "software" | "mobile", any> = {
    website: websiteAnimation,
    software: softwareAnimation,
    mobile: mobileAnimation,
  };

  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: anims[animation],
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
    />
  );
}
