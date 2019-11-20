import { GET_ERRORS } from '../_actions/types';

const initialState = {};

export default function(state = initialState, { type, payload } ) {
    switch(type) {
        case GET_ERRORS:
            return payload;
        default: 
            return state;
    }
}
