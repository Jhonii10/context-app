import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { userData } from '../helpers/userData';

const Home = () => {

    const {user , setuser} =  useContext(UserContext);

    const handleLogin = ()=>{
       setuser(userData)
    }

    const handleLogout = ()=>{
        setuser(null)
    }

    return (
        <div className='container text-center mt-5'>
            <h1>Home</h1>
            {
                !user ? 
                <button className='btn btn-primary' onClick={handleLogin}>login</button>
                :<button className='btn btn-danger' onClick={handleLogout}>logout </button>
            }
            
        </div>
    );
}

export default Home;
