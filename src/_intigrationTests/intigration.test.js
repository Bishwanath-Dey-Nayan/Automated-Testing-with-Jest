import moxios from 'moxios';
import { testStore } from '../../Utils/index';
import {fetchPosts} from '../Action/index';

describe('fetchPosts action',() =>
{
    beforeEach(() =>
    {
        //installing moxios so that the axios does give any request to the api
        moxios.install();
    });

    afterEach(() =>
    {
        moxios.uninstall();
    });

    test('store is updated correctly',() =>
    {
        const expectedState = [{
            tittle:'Example Title',
            body:'some text'
        },{
            tittle:'Example Title',
            body:'some text'
        },{
            tittle:'Example Title',
            body:'some text'
        }];

        const store = testStore();
        //creating a moxios request
        moxios.wait(() =>
        {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:expectedState
            });
        });
        
        //dispatching the fetchposts method and checking wheather the updated with moxios request
        //by checking the expected state
        return store.dispatch(fetchPosts())
        .then(() =>{
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
    })
});