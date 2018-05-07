import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];

  @Output() remove: EventEmitter<Todo> = new EventEmitter();
  @Output() complete: EventEmitter<Todo> = new EventEmitter();
  @Output() add: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  onRemoveTodo(todo: Todo): void {
    this.remove.emit(todo);
  }

  onCompleteTodo(todo: Todo): void {
    this.complete.emit(todo);
  }

  addTodo(): void {
    const title = prompt('Please enter a new task\'s title');
    if (title) {
      const timestamp = +new Date();
      const task: Todo = {
        id: timestamp,
        completed: false,
        title: title,
        userId: 777
      };
      this.add.emit(task);
    }
  }

  ngOnInit() {
  }

}
