import { useRouter } from 'next/router';

function ProductDetail(){
    const router = useRouter();
    const id = router.query.productId;
    // console.log(router);

    return <h1>Hello Product Detail {id}</h1>
}

export default ProductDetail 
// product/abc