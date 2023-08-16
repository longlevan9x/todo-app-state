import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {todoReducer} from "./states/todo/todo.state";
import {EffectsModule} from "@ngrx/effects";
import {TodoEffects} from "./states/todo/todo.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {TodoListComponent} from "./components/todo/todo-list/todo-list.component";
import {AddTodoComponent} from "./components/todo/add-todo/add-todo.component";
import { BookListComponent } from './components/book/book-list/book-list.component';
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ todos: todoReducer }),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.isProduction,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
