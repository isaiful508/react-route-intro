import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css';


const Users = () => {

    const users = useLoaderData();
    console.log(users);

//state -->data
//state--> loader
//use effect
//fetch --> state set -->


    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <div className="users">
            {
                users.map((user) => <User user={user} key={user.id}></User>)
            }    
            </div> 
        </div>
        
    );
};

export default Users;