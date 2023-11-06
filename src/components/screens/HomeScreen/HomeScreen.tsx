import Box from "@/src/components/Box/Box";
import type { Post } from '@/services/posts/PostsService'
import Background from './patterns/Background/Background';
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer"; 
/* import PostsService from "@/services/posts/PostsService" */

/* export async function getStaticProps() {
  const postsService = new PostsService();
  const posts = await postsService.getAll();
  
  return {
    props: {
      posts,
    },
  };
} */

interface HomeScreenProps {
  posts: Post[];
}

export default function HomeScreen(props :HomeScreenProps) {
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
