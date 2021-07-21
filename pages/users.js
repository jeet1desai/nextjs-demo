import User from "../components/user";
import { useRouter } from 'next/router';

function UsersList(props) {
    const router = useRouter()
    let windowLocation;
    if (props.windowLocation) {
        windowLocation = props.windowLocation;
    } else {
        windowLocation = router.pathname;
    }
    return (
        <>
            <h1>Hello UsersList</h1>
            {/* {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <User user={user} />
                        </div>
                    )
                })
            } */}
            <div>Next stars: {windowLocation}</div>
        </>
    )
}

UsersList.getInitialProps = async ({ req, asPath }) => {
    let href;
    if (req) {
        href = `https://${req.headers.host}${asPath}`;
    } else if (window) {
        href = window.location.href;
    }
    return { windowLocation: href }
}

export default UsersList

// export async function getStaticProps() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//     return {
//         props: {
//             users: data,
//         }
//     }
// }