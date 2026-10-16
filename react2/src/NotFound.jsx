import {Link} from 'react-router-dom';

function NotFound(){
    return(
        <>
            <h2>Error 404 Page not Found</h2>
            <Link className="btn btn-secondary" to="/">Home</Link>
        </>
    )
}

export default NotFound