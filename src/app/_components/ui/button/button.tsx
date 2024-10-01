import { ButtonProps } from "./button.types";
import classNames from "classnames";

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const classes = classNames("btn", className, { [`btn-${variant}`]: variant });

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
