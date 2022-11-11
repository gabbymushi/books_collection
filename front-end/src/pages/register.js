import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";

export default function Register() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));
    }

    const submitForm = () => {
        console.log(inputs);
        if (inputs.name === undefined || inputs.name === '') {
            alert('Add name')
            return
        }
        
        if (inputs.email === undefined || inputs.email === '') {
            alert('Add email')
            return
        }

        if (inputs.password === undefined || inputs.password === '') {
            alert('Add password')
            return
        }

        http.post('/auth/register', inputs).then((res) => {
            navigate('/');
        })
    }

    return (
        <div classNamee="card card-body bg-light">
            <h2>Create account</h2>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="card p-4">
                        <label>Full name</label>
                        <input type='text' className='form-control'
                            name="name"
                            value={inputs.name || ''}
                            onChange={handleChange}
                        />

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
                        <button onClick={submitForm} className="btn btn-primary" style={{ width: '100%' }}>Register</button>
                    </div>

                </div >
            </div >
        </div >
    );
}  