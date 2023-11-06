import Box from "@/src/components/Box/Box";
import type { Post } from '@/services/posts/PostsService'
import Background from './patterns/Background/Background';
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import PostsService from "@/services/posts/PostsService";



export default function HomeScreen(props: { posts: Post[]; }) {
  const PostsServiceProps = new PostsService()
  const posts = PostsServiceProps.getAll()
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
