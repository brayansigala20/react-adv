import { CSSProperties, useContext } from "react";
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { contextProduct } from "./ProductCard";
export interface Props {
  img?:string;
  className?:string;
  style?:CSSProperties;
}
 const ProductImage = ({img, className,style}:Props) => {
    const { product } = useContext(contextProduct)
    let ImgToThow: string;
    if (img) {
      ImgToThow = img
    } else if (product?.img) {
      ImgToThow = product.img
    } else {
      ImgToThow = noImage
    }
  
  
    return (
      <img style={style} className={`${styles.productImg} ${className}`} alt={'imagen'} src={ImgToThow} />
    )
  }
  
  export default ProductImage