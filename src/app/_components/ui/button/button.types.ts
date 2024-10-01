import { ButtonHTMLAttributes } from "react";


export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutline?: boolean;
    variant: string;

}