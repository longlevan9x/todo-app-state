import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());
export const toggleTodo = createAction('[Todo] Toggle Todo', props<{ id: number }>());
export const removeTodo = createAction('[Todo] Remove Todo', props<{ id: number }>());
// Define other actions here
// Action to initiate loading of Todo items
export const loadTodos = createAction('[Todo] Load Todos');

// Action to handle successful loading of Todo items
export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: Todo[] }>()
);

// Action to handle failure while loading Todo items
export const loadTodosFailure = createAction('[Todo] Load Todos Failure');


