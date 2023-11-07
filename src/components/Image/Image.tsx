interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function Image ({src, alt, ...props}: ImageProps) {
    const BaseImage = "img"

  return(
    <BaseImage
      src={src}
      alt={alt}
      {...props}
    />
  )
}


