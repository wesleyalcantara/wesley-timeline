
import Box from "@/components/Box/Box";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import Image from "@/components/Image/Image";
import Link from "@/components/Link/Link";
import Text from "@/components/Text/Text";
import TextClass from "@/src/components/theme/defaults/TextClass";


interface FeedPostProps {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  tags: string[];
  image?: string;  
}
export function FeedPost({
  title,
  excerpt,
  date,
  tags,
  url,
  image,
}: FeedPostProps) {
  const postDate = new Date(date)
    .toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' })
    .replace('.', '')
    .replace(/de /g, '');
  return (
    <Box className= "relative ml-[35px] mt-4 pb-[35px]">
      <FeedPostSideTimeline />
      {/* Date */}
      <Text variant={TextClass.body4}>
        <div className="font-bold mb-[20px] ml-[3px]">
          {postDate}
        </div>
      </Text>
      {/* Title */}
      <Link
        href={url}
        variant={TextClass.body1}
      >
        <Box
          tag="span"
          className="inline p-[2px] rounded-[4px] text-neutral-800 bg-neutral-200 hover:text-primary-900 hover:bg-primary-200"
        >
          {title}
        </Box>
      </Link>
      {/* Resumo/Excerpt */}
      <Text variant={TextClass.body3}>
        <div className="mb-[10px]">
          {excerpt}
        </div>
      </Text>
      {/* Tags */}
      <Box>
        {tags?.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            variant={TextClass.body4}
            className= "flex text-neutral-800 bg-neutral-100 rounded-full px-[6px] py-[8px] hover:text-primary-900 hover:bg-primary-200"
          >
            #{tag}
          </Link>
        ))}
      </Box>

      {/* Image */}
      {image ? (
        <Button.Base
          tag="a"
          href={url}
          className= "hover:opacity-80"
          target= "blanck"
        >
          <Image
            className= "w-100% mt-[20px] rounded-[12px]"
            src={image}
            alt="Image Description"
          />
        </Button.Base>
      ) : ""}
    </Box>
  )
}


function FeedPostSideTimeline() {
  return (
    <Box
      className= "absolute mt-[-7px] top-0 bottom-0  ml-[-22px]"
    >
      <Icon
        name="clock_fill"
        className= "absolute top-0 left-0 transform translate-x-[-50%] scale-90 sm:translate-x-[-50%] sm:scale-100"
      />
      <Box
        className="absolute top-5 bottom-0 m-auto w-[1px] bg-neutral-200"
      />
    </Box>
  );
}
