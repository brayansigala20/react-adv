import { CSSProperties, useContext } from "react"
import { contextProduct } from "./ProductCard"
import styles from '../styles/styles.module.css'
export interface props{
  title?:string;
  className?:string
  style?:CSSProperties;
}

 const ProductTitle = ({title,className,style}:props ) => {
    const {product} = useContext(contextProduct)
    return (
      <span style={style} className={`${styles.productDescription} ${className}`}>{product?.title? product?.title : title }</span>
    )
  }
  export default ProductTitle