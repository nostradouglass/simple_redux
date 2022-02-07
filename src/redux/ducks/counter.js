
// ACTIONS
const INCREMENT = "increment";
const DECREMENT = "decrement";


// ACTION CREATORS
export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})


// REDUCER


const initialState = {
    count: 0
};

let counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

export default counterReducer