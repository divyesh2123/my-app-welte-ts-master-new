export type ToDoList = ToDo[]

export interface ToDo {
  userId: number
  id: number
  title: string
  completed: boolean
}
