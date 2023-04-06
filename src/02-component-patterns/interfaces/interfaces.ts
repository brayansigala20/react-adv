import { CSSProperties, ReactElement } from "react";
import { Props as ImageProps } from "../components/ProductImage";
import { Props as ButtonProps } from "../components/ProductButton";
import { props as TitleProps } from "../components/ProductTitle";

export interface ProductContextProduct {
    counter: number;
    increaseBy: (value: number) => void;
    product?: Producto ;
}
export interface ProductCardProps {
    product?: Producto;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args:IProductOnchange) => void;
    value?: number;
}
export interface Producto {
    id: string | any;
    title?: string;
    img?: string;
}
export interface ProductCardHOCProps {
    ({ children, product, className, onChange }: ProductCardProps): JSX.Element,
    Title: (Props: TitleProps) => JSX.Element,
    Image: (Props: ImageProps) => JSX.Element,
    Buttons: (Props: ButtonProps) => JSX.Element
}
export interface IProductOnchange {
    product?:Producto;
    count:number
}