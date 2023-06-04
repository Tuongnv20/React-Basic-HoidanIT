const initState = {
    users: [
        {
            id: 1,
            name: 'John Doe'
        },
        {
            id: 2,
            name: 'John Wick'
        }

    ],
    posts: []
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'deleteUser':
            console.log('deleteUser: ', action);
            let users = state.users;
            users = users.filter((item) => item.id !== action.payload.id);
            return {
                ...state, users
            };
        case 'addUser':
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random - ${id}` }

            return {
                ...state, users: [...state.users, user]
            }




        default:
            return state;

    }



}
export default rootReducer;