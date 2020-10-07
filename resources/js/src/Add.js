import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import AppContainer from './AppContainer';
import api from '../components/api';

const Add = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const saveNote = async () => {
        setLoading(true);
        try {
            await api.addNote({
                title, description,
            })
            history.push('/');
        } catch {
            alert('Failed to Add Note')
        } finally {
            setLoading(false);
        }
    }
    return (
        <AppContainer title="Form Add Note">
            <form>
                <div className="form-group">
                    <label className="col-form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="col-form-label">Description</label>
                    <textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success" onClick={saveNote} disabled={loading}>
                        {loading ? 'Loading...' : 'Add Note'}
                    </button>
                </div>
            </form>
        </AppContainer>
    )
}

export default Add;
