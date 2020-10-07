import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom'
import AppContainer from './AppContainer';
import api from '../components/api';

const Edit = () => {
    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const editNote = async () => {
        setLoading(true);
        try {
            await api.updateNote({
                title, description,
            }, id);
            history.push('/');
        } catch {
            alert('Failed to edit Note')
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        api.getOneData(id).then(res => {
            const result = res.data;
            const note = result.data
            setTitle(note.title);
            setDescription(note.description);
        })
    }, []);
    return (
        <AppContainer title="Form Edit Note">
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
                    <button type="button" className="btn btn-success" onClick={editNote} disabled={loading}>
                        {loading ? 'Loading...' : 'Update Note'}
                    </button>
                </div>
            </form>
        </AppContainer>
    )
}

export default Edit;
