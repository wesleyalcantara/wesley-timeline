import Box from "@/src/components/Box/Box";
import React from 'react'
import Image from "next/legacy/image";

interface BackgroundProps {
  children?: React.ReactNode;
  className?: string | undefined; 
}

export default function Background({children}: BackgroundProps) {
  const imageUrl = "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <Box className="relative w-[100%]">
      <div
        style={{
          height: "400px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          className="w-[100%] h-auto"
          src={imageUrl}
          alt="Imagem de fundo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </Box>
  );
}
