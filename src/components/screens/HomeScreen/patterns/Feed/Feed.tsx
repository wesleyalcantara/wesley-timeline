import Box from "@/src/components/Box/Box";
import Text from '@/src/components/Text/Text'
import React from "react";
import Icon from '@/src/components/Icon/Icon'
import Image from "@/src/components/Image/Image";
import Link from "@/src/components/Link/Link";
import Button from "@/src/components/Button/Button";
import TextClass from "@/src/components/theme/defaults/TextClass";

interface FeedProps {
  children?: React.ReactNode;
}

export default function Feed ({children}: FeedProps) {
  return(
    <Box className="flex relative bg-neutral-000 w-full mt-[-228px] max-w-[683px] rounded-[8px] p-2 pt-[40px] pb-[32px]">
      {children}
    </Box>
  )
}

// eslint-disable-next-line react/display-name
Feed.Header = () => {
  return (
    <Box className="w-full border-b-[1px] border-solid border-neutral-200 mb-[300px]">
      <Box className="w-full flex justify-between gap-[16px] px-[25px] mb-[16px]">
        <Image
        className="rounded-full w-[130px] h-[130px]" 
        src="https://github.com/wesleyalcantara.png" 
        alt="Img de Perfil"
        />

        <Box className="flex flex-col mt-2">
          <Button tag="a"
          href="/sobre"
          className="flex justify-center items-center my-2 rounded-md p-2 sm:w-auto sm:p-4 md:w-40 md:p-3 bg-primary-500 hover:bg-primary-300 text-white hover:shadow-md transition-all duration-300 ease-in-out">
            Newsletter
          </Button>
          <Button tag="a" 
          href="/"
          className="flex justify-center items-center my-2 rounded-md p-2 sm:w-auto sm:p-4 md:w-40 md:p-3 bg-neutral-500 hover:bg-neutral-300 text-white hover:shadow-md transition-all duration-300 ease-in-out">
            By me a coffee
          </Button>
        </Box>
      </Box>
      
      <Box className="flex flex-col m-4">
        <Button.Base className="flex justify-start">
          <Text tag="h1" 
          variant={TextClass.heading4}>
            Wesley Alcantara
          </Text>
        </Button.Base>
        
        <div className="flex flex-row justify-start mt-2 gap-3">
          <Link href="https://github.com/wesleyalcantara">
            <Icon name="github" />
          </Link>
          <Link href="https://www.linkedin.com/in/wesley-alcantara-58148020b/">
            <Icon name="linkedin" />
          </Link>
          <Link href="https://www.instagram.com/wesley.alcantara_">
            <Icon name="instagram" />
          </Link>
        </div>
      </Box>
    </Box>
  )
}

// eslint-disable-next-line react/display-name
Feed.Posts = () => {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  )
}
