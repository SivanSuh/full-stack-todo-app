import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
  @Delete(":id")
  deleteTodo(@Param() params: any){
    console.log("params",params.id)
    return this.todoService.deleteTodo(params.id)
  }
}
