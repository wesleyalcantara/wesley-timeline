import React from "react";
import 'tailwindcss/tailwind.css';
import NextLink from "next/link";
import Text from "../Text/Text";
import TextClass from '../theme/defaults/TextClass';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  variant?: TextClass;
  target?: string;
}

export default function Link({ href, ...props }: LinkProps) {
  const linkProps = {
    href,
    ...props,
  }

  const classNameLinks= 'text-primary-700 hover:text-primary-800'

  const inExternaLink = href.startsWith('http')
  if(inExternaLink) return <NextLink 
    href={href} 
    target='blank'
    className= {classNameLinks}
    passHref>
    <Text {...linkProps} />
  </NextLink>

  return (
    <NextLink href={href} className= {classNameLinks} passHref>
      <Text {...linkProps} />
    </NextLink>
  );
}
