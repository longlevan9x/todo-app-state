import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as TodoActions from './todo.actions';
import { TodoService } from '../../services/todo.service';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap(() =>
        this.todoService.getTodos().pipe(
          map(todos => TodoActions.loadTodosSuccess({ todos })),
          catchError(() => of(TodoActions.loadTodosFailure()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
