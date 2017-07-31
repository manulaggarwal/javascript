const visibilityFilter = (action = {}, state = 'SHOW_ALL') => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER': return action.filter
        default: return state
    }
}
export default visibilityFilter;