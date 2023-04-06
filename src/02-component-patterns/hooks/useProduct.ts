import { useEffect, useRef, useState } from 'react'
import { IProductOnchange, Producto } from '../interfaces/interfaces'
interface IArgsUseProduct {
  product?: Producto;
  onChange?: (args: IProductOnchange) => void;
  value?: number;
}
export const useProduct = ({ onChange, product, value = 0 }: IArgsUseProduct) => {
  const [counter, setCounter] = useState(value)
  const isControlled  = useRef(!!onChange)
  const increaseBy = (value: number) => {
    if(isControlled.current){
       return onChange!({count:value,product});
    }
    const newValue = Math.max(counter + value, 0)
    onChange && onChange({ product, count: newValue })
  }
  useEffect(() => {
    console.log(`${value} state value `)
    console.log(`${counter} counter use`)
    setCounter(value)
}, [value])
  return {
    counter,
    increaseBy,
  }
}