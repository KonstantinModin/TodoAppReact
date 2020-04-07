import React from 'react';
import TodoListItem from '../todo-list-item';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => 
    <ul className="list-group todo-list">
        { todos.map(({ id, ...itemProps }) =>                   
            <TodoListItem {...itemProps } 
                key={id} 
                className="list-group-item"
                onDeleted={() => onDeleted(id)}
                onToggleDone={() => onToggleDone(id)} 
                onToggleImportant={() => onToggleImportant(id)} 
            />
        )}
    </ul>    

export default TodoList;
