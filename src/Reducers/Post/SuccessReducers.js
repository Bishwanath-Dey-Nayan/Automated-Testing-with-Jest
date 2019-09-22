import {types} from '../../Action/Type';

export default (state,action) =>{
    switch(action.type){
        case types.GET_POSTS:
            return action.payload;
        default:
            return null;
    }
}