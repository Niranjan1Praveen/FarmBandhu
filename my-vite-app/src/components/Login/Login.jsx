import React from "react";
import "./Login.css"
import goBackTo from '../../assets/images/icons/less-than.svg'
import google from '../../assets/images/icons/google.svg'
import facebook from '../../assets/images/icons/facebook.svg'
import { useNavigate, Link } from "react-router-dom";
export default function Login({setIsAuth}){
    let navigate = useNavigate();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    function signInWithGoogle(){
        signInWithPopup(auth, provider).then((user)=>{
            localStorage.setItem("User signed in:", user.email);
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
            navigate("/")
        })
    }
    
    function signInWithEmailPassword(event) {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem("User signed in:", user.email);
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
            navigate("/")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Sign-in error:", errorMessage);
        });
        }

      function signInWithFacebook() {
    
        signInWithPopup(auth, provider_fb)
          .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
            navigate("/")
            console.log('Signed in with Facebook:', user);
          })
          .catch((error) => {
            console.error('Error signing in with Facebook:', error);
          });
      }
    return(
        
        <section id="login-container">
            <form action="" id="login-form" onSubmit={signInWithEmailPassword}>
                <Link to="/" className="go-back-to">
                    <img src={goBackTo} alt="" className="icon"/>
                    go back to home page
                </Link>

                <p>Login to your Farm Bandhu account</p>

                <input type="email" id="email" placeholder="Email Address" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" id="psswd" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <a href="" id="forget-pswd">Forgot your password?</a>
                <button className="logIn-btn" type="submit">Log In</button>

                <div className="provider-sign-in-container">

                    <div className="wrap">
                        <div className="line-1"></div>
                            <small>or</small>
                        <div className="line-2"></div>
                    </div>

                    <button className="provider-btn" onClick={signInWithGoogle} type='button'>
                        <img src={google} alt="google logo" />
                        Log in with Google
                    </button>
                    <button className="provider-btn" onClick={signInWithFacebook} type='button'>
                        <img src={facebook} alt="facebooklogo" />
                        Log in with Facebook
                    </button>

                </div>
                
    
            </form>
           
        </section>
    )
}