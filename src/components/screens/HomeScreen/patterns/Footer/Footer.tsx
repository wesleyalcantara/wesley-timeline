import Box from "@/src/components/Box/Box";
import Text from "@/src/components/Text/Text";
import TextClass from './../../../../theme/defaults/TextClass';
import Link from "next/link";
import Icon from "@/src/components/Icon/Icon";

export default function Footer() {
  return (
    <Box className="relative mt-auto w-full bg-neutral-900 text-neutral-200 h-30 gap-[40px] sm:gap-[200px] md:gap-[400px] lg:gap-[500px] flex items-start justify-center">
      <Box className="flex-row mb-8">
        <h3 className="absolute justify-center font-bold mt-[15px]">
          Contatos
        </h3>
        <Text variant={TextClass.body4}>
          <ul className="mb-[20px] mt-[40px] gap-3">
            <li>
              Email: wesleybaadm@gmail.com
            </li>
            <li>
              Cel: +55 31 99454-2710
            </li>
          </ul>
        </Text>
      </Box>
      <Box className="flex flex-row justify-start mt-2 gap-3">
          <Box className="flex flex-row mt-[40px] mb-[20px] gap-3">
            <h3 className="absolute justify-center font-bold mt-[-35px]">
              Resdes Sociais
            </h3>
            <Link href="https://github.com/wesleyalcantara">
              <Icon name="github" className="" />
            </Link>
            <Link href="https://www.linkedin.com/in/wesley-alcantara-58148020b/">
              <Icon name="linkedin" />
            </Link>
            <Link href="https://www.instagram.com/wesley.alcantara_">
              <Icon name="instagram" />
            </Link>
          </Box>
      </Box>
      <Box className="absolute bottom-0 flex justify-start px-px w-full bg-neutral-800">
        <Text variant={TextClass.body3}>
          <ul >
            <li className="px-3">
              Desenvolvido por: Wesley Batista Alcantara
            </li>
          </ul>
        </Text>
      </Box>
    </Box>
  );
}
