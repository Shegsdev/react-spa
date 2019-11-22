import axios from 'axios';
import { GET_ALL_MOVIES, GET_ERRORS } from './types';

export const getAllMovies = () => async (dispatch) => {
    try {
        const response = await axios.get('https://api.tvmaze.com/shows');
        const data = await response.data;
        dispatch(setMovies(data));
    } catch(error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.message
        });
    }
}

const setMovies = (data) => ({
    type: GET_ALL_MOVIES,
    payload: data,
});
