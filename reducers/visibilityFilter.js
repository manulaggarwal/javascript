const visibilityFilter = (state = 'SHOW_ALL', action = {}) => {
    console.log("VisibilityFilter Reducer called!!!!!!!!!");
    console.log("Visibility state:- ", state, " and Action:- ", action);
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER': return action.filter;
        default: return state;
    }
}
export default visibilityFilter;