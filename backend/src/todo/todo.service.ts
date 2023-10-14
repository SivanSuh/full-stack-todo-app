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
        const newTodo = await new this.todoModel(allTodo);
        return await newTodo.save()
    }
    async deleteTodo(id) {
        const selectTodo = await this.todoModel.findByIdAndDelete(id)
        return selectTodo
    }
    async updateTodo(id,body){
        const selectUpdateTodo = await this.todoModel.findByIdAndUpdate({_id : id},body)
        return selectUpdateTodo
    }
}