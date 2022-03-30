import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
export const Login = () => {
    const [cred, setCred] = useState({
        username: '',
        password: ''
    });
    const { push } = useHistory();
    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            push('/friends');
        })
    }

    return (
      <div>
        <h2>Login</h2>
        <form
            onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="usernane">
              Username:
              <input name="username" type="text" id="username" 
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input name="password" type="password" id="password" 
                 onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    )
}

export default Login;