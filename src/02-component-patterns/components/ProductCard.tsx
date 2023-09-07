import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react'
import { ProductCardProps, ProductContextProduct } from '../interfaces/interfaces'
export const contextProduct = createContext({} as ProductContextProduct)
const { Provider } = contextProduct

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {
  const { counter, increaseBy, isMaxReached, reset } = useProduct({ onChange, product, value, initialValues })
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        IsMaxValue: initialValues.maxCount
      }}
    >
      <div>
        <div style={style} className={`${styles.productCard} ${className}`}>
          {children && children({
            count: counter,
            product: product,
            isMaxReached,
            maxCount: initialValues.maxCount,

            increaseBy,
            reset
          })}
        </div>
      </div>
    </Provider>
  )
}

