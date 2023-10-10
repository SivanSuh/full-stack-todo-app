import { Module } from "@nestjs/common";
import { TodoController } from "./todo.controller";
import { TodoService } from "./todo.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Todo, TodoSchemas } from "src/schema/todo.schema";

@Module ({
    imports:[MongooseModule.forFeature([{name:Todo.name,schema:TodoSchemas}])],
    controllers:[TodoController],
    providers:[TodoService],
})
export class TodoModule {}