import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../http";

export default function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchAllBooks();
    }, [])

    const fetchAllBooks = () => {
        http.get('/books').then(res => {
            setBooks(res.data.data);
        })
    }

    const deleteBook = (id) => {
        http.delete(`/books/${id}`).then(res => {
            fetchAllBooks();
        })
    }

    return (
        <div>
            <h2>Books Collection</h2>
            <div className="row">
                <div className="col-md-10"></div>
                <div className="col-md-2"><Link className="btn btn-primary" to={'/add-book'}>Add book</Link></div>
            </div>
            <br />
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
                        books.map((book, index) => (
                            <tr key={book.id}>
                                <td>{++index}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.description}</td>
                                <td>
                                    {JSON.parse(localStorage.getItem('user')).id === book.user_id &&
                                        <div>  <Link to={{ pathname: `/edit/${book.id}` }} className="btn btn-primary">Edit</Link>
                                            <button onClick={() => { deleteBook(book.id) }} className="btn btn-danger">Delete</button></div>
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