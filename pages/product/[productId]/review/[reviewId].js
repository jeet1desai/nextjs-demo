import { useRouter } from 'next/router';

function ReviewDetail(){
    const router = useRouter();
    const {productId, reviewId} = router.query;
    // console.log(router);

    return <h1>Product {productId} review {reviewId}</h1>
}

export default ReviewDetail 
// product/abc