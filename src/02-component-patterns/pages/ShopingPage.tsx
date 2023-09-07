import { ProductButton, ProductImage, ProductTitle } from '../components'
import { ProductCard } from '../components/ProductCard'
import { Producto } from '../interfaces/interfaces'
const product: Producto[] = [
    {
        id: '1',
        title: 'coffee-mug',
        img: './coffee-mug.png'
    }
]
const ShopingPage = () => {

    return (
        <div className=''>
            <h1>ShopingPage</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: "wrap"
            }}>
                <ProductCard
                    key={product[0].id}
                    product={product[0]}
                    initialValues={{
                        counter: 4,
                        maxCount: 10
                    }}
                    style={{ backgroundColor: 'black' }}>
                    {({ reset, isMaxReached, increaseBy }) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButton />

                            <button onClick={reset}>reset</button>
                            <button onClick={() => increaseBy(-2)}>-2</button>
                            <button onClick={() => !isMaxReached && increaseBy(+2)} className={`${isMaxReached && 'hiddenButton'}`}>+2</button>
                        </>
                    )}
                </ProductCard>
            </div>
            <div>
            </div>
        </div>


    )
}

export default ShopingPage