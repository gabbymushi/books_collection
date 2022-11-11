import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../http";

export default function Login({ login }) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));
    }

    const submitForm = () => {
        if (inputs.email === undefined || inputs.email === '') {
            alert('Add email')
            return
        }

        if (inputs.password === undefined || inputs.password === '') {
            alert('Add password')
            return
        }
        
        http.post('/auth/login', inputs).then((res) => {
            localStorage.clear();

            const { user, authorisation } = res.data
            const token = authorisation.token;

            window.localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            console.log(localStorage.getItem('token'))
            login();

            navigate('/home');
        }).catch((res) => {
            alert('Wrong username or password');
        })
    }

    return (
        <div classNamee="card card-body bg-light">
            <h2>Login</h2>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="card p-4">
                        <label>Email</label>
                        <input type='text' className='form-control'
                            name="email"
                            value={inputs.email || ''}
                            onChange={handleChange}
                        />

                        <label>Password</label>
                        <input type='password' className='form-control'
                            name="password"
                            value={inputs.password || ''}
                            onChange={handleChange}
                        />
                        <br />
                        <button onClick={submitForm} className="btn btn-primary" style={{ width: '100%' }}>Login</button>
                    </div>
                    <p>Don't have an account? <Link to='/register'>Create here</Link></p>
                </div >
            </div >
        </div >
    );
}
