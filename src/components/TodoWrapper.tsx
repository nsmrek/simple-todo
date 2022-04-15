import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import { DeleteTodoItems } from './DeleteTodoItems';
import { AddTodo, DeleteTodosByState, Todo, ToggleComplete } from '../types/todo';
import { initialTodos } from '../data/initialTodos';

const dummyValidation = {
	maxLength: 256,
}

const useStyles = makeStyles(() => ({
	container: {
		marginTop: 50,
	},
	paper: {
		padding: 20,
	}
}));

export const TodoWrapper: React.FC = () => {
	const [todos, setTodos] = useState<Array<Todo>>(initialTodos);
	const classes = useStyles();

	const toggleComplete: ToggleComplete = (selectedTodoId: string) => {
		const updatedTodos = todos.map((todo: Todo) => {
			if (todo.id === selectedTodoId) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const addTodo: AddTodo = (newTodoText: string) => {
		const newTodoTextTrim = newTodoText.trim();
		if (newTodoTextTrim !== "" && newTodoTextTrim.length < dummyValidation.maxLength) {
			setTodos([...todos, { id: (todos.length + 1).toString(), text: newTodoText, complete: false }]);
		}
	};

	const deleteTodosByState: DeleteTodosByState = (complete: boolean) => {
		const newTodos = todos.filter((todo) => {
			return todo.complete !== complete
		})
		setTodos(newTodos);
	};

	return (
		<Container maxWidth="sm" className={classes.container}>
			<Paper elevation={3} className={classes.paper}>
				<AddTodoForm addTodo={addTodo} />
				<TodoList todos={todos} toggleComplete={toggleComplete} />
				<DeleteTodoItems deleteTodosByState={deleteTodosByState} />
			</Paper>
		</Container>
	)
};
