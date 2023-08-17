import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { todoAdapter, initialState } from './todo.state';

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodosSuccess, (state, { todos }) => todoAdapter.setAll(todos, state)),
  on(TodoActions.toggleTodo, (state, { id }) => {
    const todo = state.entities[id];
    return todo ? todoAdapter.updateOne({ id, changes: { completed: !todo.completed } }, state) : state;
  }),
  on(TodoActions.removeTodo, (state, { id }) => todoAdapter.removeOne(id, state)),
  // Other actions and state mutations
);
