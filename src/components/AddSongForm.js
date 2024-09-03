import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../features/songs/songsSlice';

const AddSongForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSong = { id: Date.now(), title }; // Simple unique ID
        dispatch(addSong(newSong));
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Song title" 
                required 
            />
            <button type="submit">Add Song</button>
        </form>
    );
};

export default AddSongForm;