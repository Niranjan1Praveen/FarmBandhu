import React from 'react';
import Register from "../components/Register/Register"
const RegisterPage = ({isAuth, setIsAuth}) => {
    return (
        <React.Fragment>
            <Register setIsAuth={setIsAuth}/>
        </React.Fragment>
    );
}

export default RegisterPage;
