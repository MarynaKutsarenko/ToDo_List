import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { someToDo } from '../../db/db';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todos: Todo[] = someToDo;
  public inputToDo: string = '';

  constructor() { }

  public toggleDone(id: number): void {
    this.todos.map((value, index) => {
      if (index === id) value.completed = !value.completed;

      return value;
    })
  }

  public addToDo() {
    this.todos.push({
      content: this.inputToDo,
      completed: false
    })

    this.inputToDo = "";
  }

  public removeTodo(id: number): void {
    const tempTodo = this.todos.filter((value, index) => index !== id);
    this.todos = [...tempTodo];
  }

  ngOnInit(): void {
  }

}
