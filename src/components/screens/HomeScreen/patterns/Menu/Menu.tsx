import Box from "@/src/components/Box/Box";
import Text from '@/src/components/Text/Text'
import React from "react";
import Button from "@/src/components/Button/Button";
import Icon from "@/src/components/Icon/Icon";

export default function Menu() {
  const baseSize = "w-[40px] h-[40px] flex justify-center items-center"

  return (
    <Box tag="main" className="absolute w-full flex flex-row justify-between top-0 px-[20px] py-[16px]">
      <Button.Base className={`${baseSize} rounded-full text-neutral-000 bg-primary-500 hover:bg-primary-300 hover:shadow-md transition-all duration-300 ease-in-out`}>
        <Text>
          WA
        </Text>
      </Button.Base>
      <Button.Base className={`${baseSize} rounded-full bg-neutral-500 hover:bg-neutral-300 hover:shadow-md transition-all duration-300 ease-in-out`}>
        <Icon name="menu"/>
      </Button.Base>
    </Box>
  );
}
