import {LIST} from './constants';

const createListAction = (data) => ({
    type: LIST,
    data
});

export const fetchList = () => {
    return (dispatch, getState, Api) => {
       return Api.get('/translations')
           .then((res) => {
               if (res.data.success) {
                   dispatch(createListAction({
                       list: res.data.data
                   }));
               } else {
                   dispatch(createListAction({
                       list: []
                   }))
               }
            }, (err) => {
               console.error(err.stack);
               throw err;
            });
    }
};
