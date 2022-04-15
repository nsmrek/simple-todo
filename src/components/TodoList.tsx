import React from 'react';
import List from '@material-ui/core/List';
import { TodoListItem } from './TodoListItem';
import { Todo, ToggleComplete } from '../types/todo';

interface TodoListProps {
	todos: Array<Todo>;
	toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => (
	<List>
		{todos.map((todo: Todo) => (
			<TodoListItem
				key={todo.id}
				todo={todo}
				toggleComplete={toggleComplete}
			/>
		))}
	</List>
);
