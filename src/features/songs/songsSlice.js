import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: 'songs',
    initialState: [],

    //reducers for fetching, adding, updating, and deleting songs
    reducers: {
        fetchSuccess(state, action) {
            return action.payload;
        },
        addSong(state, action) {
            state.push(action.payload);
        },
        updateSong(state, action) {
            const index = state.findIndex(song => song.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteSong(state, action) {
            return state.filter(song => song.id !== action.payload.id);
        },
    },
}); 

export const { fetchSuccess, addSong, updateSong, deleteSong } = songsSlice.actions;
export default songsSlice.reducer;