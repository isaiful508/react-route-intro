import { useLoaderData, useNavigate, useParams } from "react-router-dom";



const PostDetails = () => {

    const post = useLoaderData();
    const {postId} = useParams();
    const navigate = useNavigate();
    console.log(postId);
    const {id, title, body} = post; 

    const handleGoBack = () =>{
        navigate(-1);
    }

    return (
        <div>
            <h3>Post Details About: {id}</h3>
            <p>Title: {title}</p>
            <p><small>Body:  {body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;