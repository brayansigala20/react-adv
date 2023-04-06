import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react'
import { ProductCardProps, ProductContextProduct } from '../interfaces/interfaces'

export const contextProduct = createContext({} as ProductContextProduct)
const { Provider } = contextProduct


export const ProductCard = ({ children, product, className, style, onChange,value }: ProductCardProps) => { 
  const { counter, increaseBy } = useProduct({onChange,product,value})
  console.log(`${counter} counter`)
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product
      }}
    >
      <div>
        <div style={style} className={`${styles.productCard} ${className}`}>
          {children}
        </div>
      </div>
    </Provider>
  )
}

