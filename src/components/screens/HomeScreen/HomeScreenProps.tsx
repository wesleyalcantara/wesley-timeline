import { Post } from '@/services/posts/PostsService';

interface HomeScreenProps extends Post {
  posts: Post[];
}

export default HomeScreenProps;
