// import {types} from '../../Action/Type';

// const initialState = {
//     posts: [],

//   };

// export default (state=initialState,action) =>{
//     switch(action.type){
//         case types.GET_POSTS:
//             return{
//                 ...state,
//                 posts:action.payload
//             };
//         default:
//             return state;
//     }
// }

import { types } from '../../Action/Type';


export default (state=[], action) => {
    switch(action.type){
        case types.GET_POSTS:
            return action.payload;
        default:
            return state;
    }
};