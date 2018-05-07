import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: Todo;

  @Output() remove: EventEmitter<Todo> = new EventEmitter();

  @Output() complete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  removeTodo(todo: Todo): void {
    this.remove.emit(todo);
  }

  markAsCompleted(todo: Todo): void {
    this.complete.emit(todo);
  }

  ngOnInit() {
  }

}
