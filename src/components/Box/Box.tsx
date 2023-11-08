import React from 'react';

interface BoxProps {
  tag?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode | undefined;
  className?: string;
}

export default function Box({ children, tag, className }: BoxProps) {
  const Tag = tag || 'div';

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}


