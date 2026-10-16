import { useState, useEffect, createContext } from "react";
import Login from './Login.jsx';
import Counter from './Counter.jsx';
import {Link, useNavigate} from "react-router-dom";

export const dataContext = createContext();
function Home(){

    const navigate = useNavigate();

    const [posts, setPosts] = useState(null);

    const data="Angular"

    useEffect(()=>{

        const controller = new AbortController();
        const signal = controller.signal;

        setTimeout(()=>{
            fetch("http://localhost:3000/posts", {signal})
            .then(response=>{
                return response.json()
            })
            .then((data)=> {
                console.log(data);
                setPosts(data);
            }).catch(err=>{
            console.log(err);
        })
        },5000);

        //cleanup function
        return ()=>{
            console.log('Component UnMounted, Cleaning up');
            controller.abort();
        }
        
    }, []);
    return(
        <>
            <div className="container">
                <Link to="/login">Login</Link>

                <dataContext.Provider value={data}>
                    <Login/>
                </dataContext.Provider>


                <div className="row justify-center-center m-3">
                    {posts && posts.map(post => {
                        return(
                            <div key={post.id} className="card m-3" style={{width: '18rem'}} onClick={()=>navigate('/post/'+post.id)} >
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Home