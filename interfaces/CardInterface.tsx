export interface TodoInterface {
  name: string;
  status: boolean;
}

export interface TodoCardProps {
  todo: TodoInterface;
  index: number;
  todos: TodoInterface[];
  setTodos: any;
}
