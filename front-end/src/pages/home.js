import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../http";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllBooks();
    }, [])

    const fetchAllBooks = () => {
        http.get('/books').then(res => {
            setUsers(res.data.data);
        })
    }

    return (
        <div>
            <h2>Books Collection</h2>
            <div className="row">
                <div className="col-md-10"></div>
                <div className="col-md-2"><Link className="btn btn-primary" to={'/add-book'}>Add book</Link></div>
            </div>
            <br/>
            <table className="table table-striped table-bordered ">
                <thead className="thead-dark">
                    <tr>
                        <th>s/N</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{++index}</td>
                                <td>{user.title}</td>
                                <td>{user.author}</td>
                                <td>{user.description}</td>
                                <td>
                                    {JSON.parse(localStorage.getItem('user')).id === user.user_id &&
                                        <div>  <Link to={{ pathname: `/edit/${user.id}` }} className="btn btn-primary">Edit</Link>
                                            <button className="btn btn-danger">Delete</button></div>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    );
}  