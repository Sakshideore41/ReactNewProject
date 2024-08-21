function Product(props)
{
    const element=
    <>
        <h1>the product details are</h1>
        <p>{props.product.id}</p>
        <p>{props.product.name}</p>
        <p>{props.product.price}</p>        
    </>

    return element;
}

export default Product;