import Product from "./Product";
function Productlist() {

const products = [
{ id: 1, title: 'LGTV', price: 45000 },
{ id: 2, title: 'Sony TV', price: 67000 },
{ id: 3, title: 'Android TV', price: 56000 }
];
const element =
<>
<h2>Product List</h2>
{products.map(product => (

<Product product={product} key={product.id}/>
))
}
</>
return element;
}
export default Productlist;