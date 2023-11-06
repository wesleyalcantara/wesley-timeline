import Box from "@/src/components/Box/Box";
import type { Post } from '@/services/posts/PostsService'
import Background from './patterns/Background/Background';
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import HomeScreenProps from "@/src/components/screens/HomeScreen/HomeScreenProps"


export default function HomeScreen(props: HomeScreenProps) {
  return (
    <Box
      tag="main"
      className="min-h-screen flex flex-col bg-neutral-x000 justify-center items-center">
      <Background/>
      <Menu/>
      <Feed>
        <Feed.Header />
        <Feed.Posts  posts={props.posts} />
      </Feed>
      <Footer/>
    </Box>   
  );
}
