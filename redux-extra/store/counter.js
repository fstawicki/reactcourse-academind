const counter = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT': state.counter = state.counter + 1;
        case 'DECREMENT': state.counter = state.counter - 1;

    }
}
export default counter;