import {ADD_BIRD, INCREMENT_BIRD } from "../constants/birdConstants";

const initialState = [
    {
      name: '',
      views: 1,
    }
]; 

export const birds = (state=initialState, action) => {
    // console.log('action.type:'+action.type)
    switch (action.type) {
        case ADD_BIRD:
            // console.log(action.bird)
            return [
                ...state,
                {
                name: action.bird,
                views: 1
                }
            ];
        case INCREMENT_BIRD:
            const bird = state.find(b => action.bird === b.name);
            const birds = state.filter(b => action.bird !== b.name);
            return [
                ...birds,
                {
                ...bird,
                views: bird.views + 1
                }
            ];
        default:
            return state;
    }
}

