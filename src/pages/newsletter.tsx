import React from "react";
import Link from "@/src/components/Link/Link";
import Box from "../components/Box/Box";
import Image from "../components/Image/Image";
import Text from "../components/Text/Text";
import TextClass from '@/src/components/theme/defaults/TextClass';
import Button from "../components/Button/Button";

export default function AbautScreen() {
  return (
    <Box className="flex items-center justify-center h-screen w-screen">
      <Box className="flex flex-col items-center w-full max-w-[700px] p-[16px]">
        <Link href="/">
          <Image
            className="mt-[16px] mb-[16px] rounded-full w-[130px] h-[130px]"
            src="https://github.com/wesleyalcantara.png"
            alt="Img de Perfil"
          />
        </Link>
        <Text variant={TextClass.heading2}>
          Newsletter do Programador Wesley
        </Text>
        <NewsletterTextField
          className="mt-[5px]"
          placeholder="Informe seu email"
        />
        <Button tag="a" href="/newsletter" className="mt-[16px] border-0 outline-0 no-underline flex justify-center items-center my-2 rounded-md p-2 w-40 md:p-3 bg-primary-500 hover:bg-primary-300 text-white hover:shadow-md transition-all duration-300 ease-in-out">
          Cadastrar
        </Button>
      </Box>        
    </Box>
  );
}

interface NewsletterTextFieldProps {
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
}

function NewsletterTextField ({ placeholder, children }: NewsletterTextFieldProps) {
  const BaseNewsletterTextField = 'input'

  return(
    <Box className="flex items-center justify-center w-full">
      <BaseNewsletterTextField placeholder={placeholder} className="max-w-[300px] border-neutral-100 rounded-[4px] border-[1px] border-[] p-[8px] w-full mt-[5px]" >
       {children}
      </BaseNewsletterTextField>
    </Box>
  )
}
