import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

export default function EditBook() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchUser();
    }, {})

    const fetchUser = () => {
        http.get(`/books/${id}`).then(res => {
            setInputs({
                title: res.data.data.title,
                author: res.data.data.author,
                description: res.data.data.description,
                is_public: res.data.data.is_public,
            });
        })
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));
    }

    const submitForm = () => {
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

        http.patch(`/books/${id}`, inputs).then((res) => {
            navigate('/');
        })
    }

    return (
        <div classNamee="card card-body bg-light">
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6 justify-content-center">
                    <h2>Edit a book</h2>
                    <div className="card p-4">
                        <label>Title</label>
                        <input type='text' className='form-control'
                            name="title"
                            value={inputs.title || ''}
                            onChange={handleChange}
                        />

                        <label>Author</label>
                        <input type='text' className='form-control'
                            name="author"
                            value={inputs.author || ''}
                            onChange={handleChange}
                        />

                        <label>Title</label>
                        <textarea type='text' className='form-control' maxLength='200'
                            name="description"
                            value={inputs.description || ''}
                            onChange={handleChange}>
                        </textarea>
                        <label>Is Public</label>
                        <select className='form-control'
                            value={inputs.is_public}
                            name="is_public"
                            onChange={handleChange}>
                            <option value='1'>Yes</option>
                            <option value='0'>No</option>
                        </select>
                        <br />
                        <button onClick={submitForm} className="btn btn-primary" style={{ width: '100%' }}>Update</button>
                    </div>
                </div >
            </div >
        </div >
    );
}  