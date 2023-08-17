import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectAllTodos} from "../../../states/todo/todo.selectors";
import {Todo} from "../../../models/todo.model";
import {removeTodo, toggleTodo} from "../../../states/todo/todo.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  todos$: Observable<Todo[]> = new Observable<Todo[]>();

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectAllTodos);

  }

  ngOnInit(): void {
    this.todos$ = this.store.select(selectAllTodos);
  }

  onToggleTodo(id: number): void {
    this.store.dispatch(toggleTodo({ id }));
  }

  onRemoveTodo(id: number): void {
    this.store.dispatch(removeTodo({ id }));
  }
}
