// TODO: make an array of product objects
// export a mapped array of <Product /> objects
import Product from '../components/Product'
const productInfo = [
    {
        name: 'a',
        image: 'a',
        price: 'a',
        description: 'a'
    },
]

const products = productInfo.map(product => {
    return <Product 
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}/>
})

export default products