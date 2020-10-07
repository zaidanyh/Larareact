import React, {useEffect, useState} from 'react';
import api from '../components/api';
import AppContainer from './AppContainer';
import { Link } from 'react-router-dom'

const Notes = () => {
    const [notes, setNotes] = useState(null);

    const fetchNotes = () => {
        api.getAllData().then(res => {
            const result = res.data;
            setNotes(result.data)
            console.log(res);
        });
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    const loadNotes = () => {
        if (!notes) {
            return (
                <tr>
                    <td colSpan="4">Loading...</td>
                </tr>
            );
        }
        if (notes.length === 0) {
            return (
                <tr>
                    <td colSpan="4">There is no data note</td>
                </tr>
            );
        }

        return notes.map((note) => (
            <tr>
                <td>{note.id}</td>
                <td>{note.title}</td>
                <td>{note.description}</td>
                <td>
                    <Link to={`/edit/${note.id}`} className="btn btn-warning m-1">Edit</Link>
                    <button type="button" className="btn btn-danger m-1" onClick={() => {
                        api.deleteNote(note.id).then(fetchNotes).catch(err => {
                            alert('Failed to delete note with id : '+note.id);
                        });
                    }}>
                        Delete
                    </button>
                </td>
            </tr>
        ))
    }
    return (
        <AppContainer title="Laravel React JS">
            <Link className="btn btn-primary mb-3" to="/add">Add Note</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loadNotes()}
                </tbody>
            </table>
        </AppContainer>
    )
}

export default Notes;
