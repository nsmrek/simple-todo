export type Todo = {
	id: string;
	text: string;
	complete: boolean;
};

export type AddTodo = (newTodoText: string) => void;

export type DeleteTodosByState = (complete: boolean) => void;

export type ToggleComplete = (todoId: string) => void;
