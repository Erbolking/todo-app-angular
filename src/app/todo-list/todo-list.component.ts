import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];

  @Output() remove: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  ngOnInit() {
  }

}
