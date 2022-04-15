import React, { useState, ChangeEvent, FormEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { AddTodo } from '../types/todo';

interface AddTodoFormProps {
	addTodo: AddTodo;
}

const useStyles = makeStyles(() => ({
	root: {
		'& > *': {
			marginBottom: 10,
			width: '100%',
		},
	},
}));

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
	const classes = useStyles();
	const [newTodo, setNewTodo] = useState<string>("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value);
	};

	const handleSubmit = (e: FormEvent | KeyboardEvent) => {
		e.preventDefault();
		addTodo(newTodo);
		setNewTodo("");
	};

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<TextField
				id="standard-basic"
				label="New todo"
				onChange={handleChange}
				value={newTodo}
				onKeyPress={(event) => {
					if (event.key === 'Enter') {
						handleSubmit(event)
					}
				}}
			/>
			<Button variant="contained" color="primary" onClick={handleSubmit}>
				Add Todo
			</Button>
		</form>
	);
};


