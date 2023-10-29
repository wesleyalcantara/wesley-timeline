import Box from "@/src/components/Box/Box";
import Background from './patterns/Background/Background';
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Text from '@/src/components/Text/Text'
import Footer from "./patterns/Footer/Footer";
import TextClass from "../../theme/defaults/TextClass";
import Link from "@/src/components/Link/Link";
import templateConfig from "../../../../template-config.yml";

export default function HomeScreen() {
  return (
    <Box
      tag="main"
      className="min-h-screen flex flex-col bg-neutral-x000 justify-center items-center">
      <Background/>
      <Menu/>
      <Feed>
        <Feed.Header/>
      </Feed>
      <Footer/>
    </Box>   
  );
}


