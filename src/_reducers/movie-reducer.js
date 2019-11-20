import { GET_ALL_MOVIES } from '../_actions/types';

const initialState = {
    data: []
};

export default function(state = initialState, { type, payload }) {
    switch(type) {
        case GET_ALL_MOVIES:
            return {
                ...state,
                data: payload,
            }
        default: 
            return state;
    }
}