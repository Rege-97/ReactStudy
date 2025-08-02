export const initialState2 = {
    name: '',
    loggedIn: false
}

export function loginReducer(state, action) {
    switch (action.type){
        case 'login':
            return{
                ...state,
                name: '채현',
                loggedIn: true
            }
        case 'logout':
            return{
                ...state,
                name: '',
                loggedIn: false
            }
        default:
            throw new Error('에러')
    }
}