export const initialState = {
    count: 0
}

export function countReducer(state, action) {
    const { value } = action.payload

    switch (action.type) {
        case 'INC':
            return {
                ...state,
                count: state.count + value
            }
        case 'DEC':
            return {
                ...state,
                count: state.count - value
            }
        default:
            throw new Error('에러')

    }
}