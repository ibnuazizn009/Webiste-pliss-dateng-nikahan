import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    render(){
        return(
            <Fragment>
                <h1>Login</h1>
                <button style={{
                    margin : "10px",
                    background: "blue"
                }}><Link to={"/"} style={{
                   textDecoration: "none",
                   color: "white" 
                }}>Back Home
                </Link>
                </button>
            </Fragment>
        )
    }
}

export default Login;