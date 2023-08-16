import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, text: 'Learn NgRx', completed: false },
    { id: 2, text: 'Build a Todo app', completed: true },
  ];

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }
}
