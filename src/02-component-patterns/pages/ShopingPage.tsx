import { useEffect, useState } from 'react'
import ProductCard from '../components'
import { ProductButton, ProductImage, ProductTitle } from '../components'
import { IProductOnchange, Producto } from '../interfaces/interfaces'
import '../styles/custom-styles.css'

const product: Producto[] = [
    {
        id: '1',
        title: 'coffee-mug',
        img: './coffee-mug.png'
    },
    {
        id: '2',
        title: 'coffee-mug2',
        img: './coffee-mug.png'
    }
]
interface ProductCart extends Producto {
    counter: number
}
const ShopingPage = () => {
    const [shoppingState, setShoppingState] = useState<{ [key: string]: ProductCart }>({})
    const handleOnChange = ({ count, product }: IProductOnchange) => {
        setShoppingState(oldShopingState => {
            const inShoppingCar: ProductCart = oldShopingState[product?.id] || { ...product, counter: 0 }
            if (Math.max(inShoppingCar.counter + count, 0) > 0) {
                inShoppingCar.counter += count
                return {
                    ...oldShopingState,
                    [product?.id]: inShoppingCar
                }
            }
            const p = { ...oldShopingState }
            delete p[product?.id]
            return {
                ...p
            }
        })
    }
    return (
        <div className=''>
            <h1>ShopingPage</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: "wrap"
            }}>
                {product.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className='bg-dark'
                        onChange={handleOnChange}
                        style={{ backgroundColor: 'black' }}>
                        <ProductImage className='image-change' />
                        <ProductTitle className='text-Change' />
                        <ProductButton className='custom-Button' />
                    </ProductCard>
                ))}
            </div>
            <div className='shopping-card'>
                {Object.entries(shoppingState).map(([key, product]) => (
                    <ProductCard
                        key={key}
                        product={product}
                        className='bg-dark'
                        style={{ backgroundColor: 'black', width: '150px ' }}
                        value={product.counter}
                        onChange={handleOnChange}
                    >
                        <ProductImage className='image-change' style={{ boxShadow: '10px 10px 10px rgba' }} />
                        <ProductButton className='custom-Button ' style={{ display: 'flex', justifyContent: 'center' }} />
                    </ProductCard>
                ))}
            </div>
            <div>
                <code>
                    {JSON.stringify(shoppingState)}
                </code>
            </div>
        </div>


    )
}

export default ShopingPage