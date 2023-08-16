import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectAllTodos} from "../../../states/todo/todo.selectors";
import {Todo} from "../../../models/todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  todos$: Observable<Todo[]> = new Observable<Todo[]>();

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.todos$ = this.store.select(selectAllTodos);
  }
}
