import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSong } from '../features/songs/songsSlice';

const SongList = () => {
    const songs = useSelector((state) => state.songs.songs);
    const dispatch = useDispatch();

    return (
        <ul>
            {songs.map((song) => (
                <li key={song.id}>
                    {song.title}
                    <button onClick={() => dispatch(deleteSong(song.id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default SongList;