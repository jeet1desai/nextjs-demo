import { useRouter } from 'next/router';

function Docs() {
    const router = useRouter();
    const { params=[] } = router.query;
    console.log(params);
    return <h1>Hello Docs</h1>
}

export default Docs
// docs/f1
// docs/f1/e1
