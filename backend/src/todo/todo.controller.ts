import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoProps } from './todo.model';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  async addNewTodo(@Body() addTodo: TodoProps) {
    return this.todoService.addTodo(addTodo);
  }
  @Get()
  getTodo() {
    return this.todoService.getTodo();
  }
}
