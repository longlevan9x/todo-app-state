import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState, todoAdapter } from './todo.state';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectAllTodos = createSelector(selectTodoState, todoAdapter.getSelectors().selectAll);
