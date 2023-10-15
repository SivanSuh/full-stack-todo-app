import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoProps } from './todo.model';
import { TodoService } from './todo.service';
import { Todo } from 'src/schema/todo.schema';

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
  deleteTodo(@Param("id") id: string){
    console.log("params",id)
    return this.todoService.deleteTodo(id)
  }
  @Put(":id")
  updateTodo(@Param("id") id:string, @Body() body:Todo){
    return this.todoService.updateTodo(id,body)
  } 
  @Get(":id")
  selectTodo(@Param("id") id:string){
    return this.todoService.selectTodo(id)
  }
}
