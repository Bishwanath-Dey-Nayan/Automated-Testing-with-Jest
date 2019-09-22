import {types} from '../../Action/Type';
import PostReducer from './SuccessReducers';

describe('Post Reducer',() =>
{
    it('should return default state',()=>
    {
        const newState = PostReducer(undefined,{});
        expect(newState).toBe(undefined);
    })

    it('should not return default state',() =>
    {
        const posts = [{title:'Test1'},{title:'Test2'}];
        const newState = PostReducer(undefined,{
            type:types.GET_POSTS,
            payload:posts
        })
        expect(newState).toBe(posts);
    })
})