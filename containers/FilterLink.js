import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
    console.log("FilterLink container called after state update");
    console.log("State:- ", state, "     ownProps:- ", ownProps);
    console.log("-------------------------------------------------------------");
    return {
        active: ownProps.filter === state.visibilityFilter.type
    };
}
const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("Mapped Dispatcher to ownprops:- ", ownProps);
    return {
        onClick: () => {
            console.log("Mapped Dispatcher to ownprops onclick:- ");
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    };
}
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
export default FilterLink;