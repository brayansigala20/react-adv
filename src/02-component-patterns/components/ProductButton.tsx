import { CSSProperties, useContext, useCallback } from "react"
import { contextProduct } from "./ProductCard"
import styles from '../styles/styles.module.css'
export interface Props {
  className?: string;
  style?: CSSProperties;
}
const ProductButton = ({ className, style }: Props) => {
  const { counter, increaseBy, IsMaxValue } = useContext(contextProduct)

  const IsMaxReached = useCallback(() => {
    if (counter !== IsMaxValue) {
      return false
    }
    return true
  }, [counter, IsMaxValue])
  return (
    <div style={style} className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}
      >-</button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${IsMaxReached() ? `${styles.disable}` : ''} ${styles.buttonAdd}`}
        onClick={() => counter !== IsMaxValue!! ? increaseBy(1) : ''}
      >+</button>
    </div>
  )
}
export default ProductButton