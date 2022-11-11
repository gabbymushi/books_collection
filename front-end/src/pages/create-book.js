import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";

export default function CreateBook() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));
    }

    const submitForm = () => {
        console.log(inputs.title);
        if (inputs.title === undefined || inputs.title === '') {
            alert('Add title')
            return
        }
        if (inputs.author === undefined || inputs.author === '') {
            alert('Add author')
            return
        }
        if (inputs.description === undefined || inputs.description === '') {
            alert('Add description')
            return
        }

        http.post('/books', inputs).then((res) => {
            navigate('/');
        })
    }

    return (
        <div classNamee="card card-body bg-light">
            <h2>Add a book</h2>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="card p-4">
                        <label>Title</label>
                        <input type='text' className='form-control'
                            name="title"
                            value={inputs.title || ''}
                            onChange={handleChange}
                            required
                        />

                        <label>Author</label>
                        <input type='text' className='form-control'
                            name="author"
                            value={inputs.author || ''}
                            onChange={handleChange}
                        />

                        <label>Description</label>
                        <textarea type='text' className='form-control' maxLength='200'
                            name="description"
                            value={inputs.description || ''}
                            onChange={handleChange}>
                        </textarea>
                        <br />
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckChecked"
                                name="is_public"
                                value={inputs.is_public || '0'}
                                onChange={handleChange} />
                            <label class="form-check-label" for="flexCheckChecked">
                                Is private
                            </label>
                        </div>
                        <br />
                        <button onClick={submitForm} className="btn btn-primary" style={{ width: '100%' }}>Save</button>
                    </div>
                </div >
            </div >
        </div >
    );
}  