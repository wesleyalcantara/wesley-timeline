import React from "react";
import Text from "../Text/Text"
import TextClass from "../theme/defaults/TextClass"

export interface PropsButtonBase {
  className?: string;
  children?: React.ReactNode;
  variant?: TextClass;
  tag?: string;
  href?: string;
  target?: string;
}

export default function ButtonBase({href, tag, children, ...props }: PropsButtonBase) {
  const Tag = tag || "button";

  if (Tag === "button") {
    // Se a tag for "button", renderize um botão
    return (
      <button className="border-0 outline-0 no-underline" {...props}>
        <Text variant={TextClass.body3}>
          {children}
        </Text>
      </button>
    );
  } else if (Tag === "a" && href) {
    // Se a tag for "a" e houver um href, renderize um link    
    return (
      <a href={href} className="border-0 outline-0 no-underline" {...props}>
        <Text variant={TextClass.body3}>
          {children}
        </Text>
      </a>
    );
  } else {
    // Lida com outros casos (por exemplo, quando não há href)
    return (
      <div {...props}>
        <Text variant={TextClass.body3}>
          {children}
        </Text>
      </div>
    );
  }
}
