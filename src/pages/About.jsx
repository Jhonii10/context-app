import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

const About = () => {

    const {user} = useContext(UserContext);


    return (
        <div className='container text-center mt-5'>
            <h1>About</h1>
            {
                !user ? <h2 className='text-danger'>Please login</h2>:
                <div>
                    <h2>Bienvenido: {user.data.first_name}</h2>
                    <p>Usuario: {user.data.first_name} {user.data.last_name}</p>
                    <p>email: {user.data.email}</p>
                    <img
                        src={user.data.avatar}
                        alt={user.data.id}

                    />
                </div>
            }
        </div>
    );
}

export default About;
