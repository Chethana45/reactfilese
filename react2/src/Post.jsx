import {useParams} from 'react-router-dom';
import {useState} from 'react';

function Post(){

    const [post, setPost] = useState([]);

    const {id} = useParams();

    fetch("http://localhost:3000/posts/"+id)
        .then(response=>{
            return response.json()
        })
        .then((data)=> {
            console.log(data);
            setPost(data);
        }).catch(err=>{
        console.log(err);
    })

    return(
    <>
        <div>
            {post && <div className="container m-2">
                Post: {id}
                <h2>{post.title}</h2>
                <h4>{post.content}</h4>
            </div>}
        </div>
    </>
    )
}

export default Post