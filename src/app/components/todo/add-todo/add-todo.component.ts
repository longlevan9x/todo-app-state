import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Todo} from "../../../models/todo.model";
import {addTodo} from "../../../states/todo/todo.actions";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  constructor(private store: Store) {
  }

  addTodo(text: string): void {
    const todo: Todo = {id: Date.now(), text, completed: false};
    this.store.dispatch(addTodo({todo}));
  }
}
