import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Todo, ToggleComplete } from '../types/todo';

interface TodoListItemProps {
	todo: Todo;
	toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete}) => (
	<ListItem style={{width: '100%'}}>
		<ListItemText primary={todo.text} />
		<ListItemSecondaryAction>
			<Checkbox
				onChange={() => toggleComplete(todo.id)}
				checked={todo.complete}
			/>
		</ListItemSecondaryAction>
	</ListItem>
);
