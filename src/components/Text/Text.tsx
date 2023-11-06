import React from "react";
import TextClass from '../theme/defaults/TextClass';

interface TextProps {
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'a' | 'button' | 'div';
  children?: React.ReactNode;
  variant?: TextClass;
  className?: string;
}

export default function Text ({tag = 'div', children, variant, className}: TextProps) {
  const BaseText = tag;

  return (
    <BaseText className={`@apply ${variant} ${className}`} >
      {children}
    </BaseText>
  )
}
