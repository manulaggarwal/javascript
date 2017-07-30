import React from 'react';
import PropTypes from 'prop-types';

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

const Todo = ({onClick, completed, text}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed? 'line-through':'none'
        }}
    >
        {text}
    </li>
)

export default Todo;