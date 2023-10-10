import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Todo, TodoSchema } from "src/schema/todo.schema";

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private todoModel:Model<TodoSchema>){}
    async getTodo() {
        return await this.todoModel.find()
    }
    async addTodo(allTodo){
        const newTodo = new this.todoModel(allTodo);
        return await newTodo.save()
    }
}