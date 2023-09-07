import { useEffect, useRef, useState } from 'react'
import { IProductOnchange, InitialValues, Producto } from '../interfaces/interfaces'
interface IArgsUseProduct {
  product?: Producto;
  onChange?: (args: IProductOnchange) => void;
  value?: number;
  initialValues: InitialValues;
}
export const useProduct = ({ onChange, product, value = 0, initialValues }: IArgsUseProduct) => {
  const [counter, setCounter] = useState<number>(initialValues?.counter || value)
  const isRender = useRef(false)
  const isControlled = useRef(!!onChange)
  const increaseBy = (value: number) => {
    if (!isControlled.current) {
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)
    onChange && onChange({ product, count: newValue })
  }
  const reset = ()=>{
    setCounter(initialValues.counter || value)
  }
  useEffect(() => {
    if (!isRender.current) return
    setCounter(value)
  }, [counter])
  useEffect(() => {
    isControlled.current = true;
  }, [])
  return {
    counter,
    increaseBy,
    isMaxReached: !!initialValues.counter && initialValues.maxCount === counter,
    reset
  }
}