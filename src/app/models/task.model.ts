export default interface Task {
  id?: string;
  task?: string;
  userId?: number;
  status?: string;
  dueDate?: string;
  createdOn?: string;
  discarded?: boolean;
}
