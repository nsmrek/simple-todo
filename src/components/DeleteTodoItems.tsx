import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { DeleteTodosByState } from '../types/todo';

interface DeleteTodoItemsProps {
	deleteTodosByState: DeleteTodosByState;
}

const useStyles = makeStyles(() => ({
	container: {
		width: '100%'
	},
	firstDeleteBtn: {
		marginRight: 30,
		'@media (max-width: 460px)' : {
			marginBottom: 15,
		}
	},
}));

export const DeleteTodoItems: React.FC<DeleteTodoItemsProps> = ({ deleteTodosByState }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Button className={classes.firstDeleteBtn} variant="outlined" color="secondary" onClick={() => deleteTodosByState(true)}>Delete Completed</Button>
			<Button variant="outlined" color="secondary" onClick={() => deleteTodosByState (false)}>Delete Incompleted</Button>
		</div>
	);
};
