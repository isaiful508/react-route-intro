import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();
    const postStyle = {
        border: '2px solid purple',
        padding: '20px',
        borderRadius:'20px'
    }

    

    const handleShowDtails = () => {
                            navigate(`/post/${id}`);
    }

   

    


    return (
        <div style={postStyle}>
            <h4>{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
        <button onClick={handleShowDtails}>Click to see details</button>

        </div>
    );
};

export default Post;