export interface Todo {
    name: string,
    email: string,
    phone: number,
    
  }
  
  export type CreateTodoDto = Omit<Todo, 'id'>;
  