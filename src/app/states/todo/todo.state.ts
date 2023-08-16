import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import * as TodoActions from './todo.actions';

export interface TodoState extends EntityState<Todo> {}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: TodoState = todoAdapter.getInitialState();

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, { todo }) => todoAdapter.addOne(todo, state)),
  // Define other actions and state mutations here
);
;
