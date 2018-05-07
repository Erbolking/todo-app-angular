import {Component, OnInit} from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService]
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.todoService
      .getTodos()
      .subscribe((todos) => {
        // return only first 10 items
        this.todos = todos.slice(0, 10);
      });
  }

  onAddTodo(todo: Todo): void {
    console.log(todo)
    this.todos = this.todos.concat(todo);
    // we also should call a service method
    // to save it somewhere
  }

  onRemoveTodo(todo: Todo): void {
    this.todos = this.todos.filter((item) => item.id !== todo.id);
    // we also should call a service method
    // to save it somewhere
  }

  onCompleteTodo(todo: Todo): void {
    // toggle the status
    todo.completed = !todo.completed;
    // we also should call a service method
    // to save it somewhere
  }

}
