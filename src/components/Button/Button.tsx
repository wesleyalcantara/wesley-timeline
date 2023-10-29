import ButtonBase, {PropsButtonBase} from "./ButtonBase";

interface ButtonProps extends PropsButtonBase {
  children: React.ReactNode;
}

export default function Button ({children, ...props}: ButtonProps) {
  return (
    <ButtonBase {...props}>
        {children}
    </ButtonBase>
  )
}

Button.Base = ButtonBase;
