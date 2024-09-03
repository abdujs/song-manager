import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: 'songs',
    initialState:  {
        songs: [],
        loading: false,
        error: null,
    },

    //Reducer for managing song data or states
    reducers: {
        fetchSongsRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchSongsSuccess: (state, action) => {
            state.songs = action.payload;
            state.loading = false;
        },
        fetchSongsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addSong: (state, action) => {
            state.songs.push(action.payload);
        },
        updateSong: (state, action) => {
            const index = state.songs.findIndex(song => song.id === action.payload.id);
            if (index !== -1) {
                state.songs[index] = action.payload;
            }
        },
        deleteSong: (state, action) => {
            state.songs = state.songs.filter(song => song.id !== action.payload);
        },
    },
});

export const { fetchSongsRequest, fetchSongsSuccess, fetchSongsFailure, addSong, updateSong, deleteSong } = songsSlice.actions;
export default songsSlice.reducer;