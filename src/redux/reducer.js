// create the initial state
const initialState = {
    todos: ['wash car', 'work out', 'mow the lawn']
};

// create our reducer function
export default function reducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TODO':
            const newTodos = [...state.todos, action.payload];
            return Object.assign({}, state, {todos: newTodos});
        default:
            return state;
    }
};