const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'LOG_IN': return (state.loggedReducer = !state.loggedReducer)
        default: return state;
    }
}

export default loggedReducer;