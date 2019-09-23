import {types} from '../../Action/Type';
import PostReducer from './SuccessReducers';
 
//checking the reducer
describe('Post Reducer',() =>
{
    it('should return default state',()=>
    {
        //creating a default state with an empty object
        const newState = PostReducer(undefined,{});
        expect(newState).toEqual([]);
    })

    it('should not return default state',() =>
    {
        //creating an object
        const posts = [{title:'Test1'},{title:'Test2'}];

        //passing the posts object in the postReducer to check wheather it return the object correctly
        const newState = PostReducer(undefined,{
            type:types.GET_POSTS,
            payload:posts
        })
        expect(newState).toEqual(posts);
    })
})