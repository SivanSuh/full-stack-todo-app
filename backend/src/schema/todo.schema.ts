import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoSchema = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const TodoSchemas = SchemaFactory.createForClass(Todo);