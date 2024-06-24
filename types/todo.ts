export interface TodoItemType {
  title: string;
  isCompleted: boolean;
  id: string;
}

export interface UserResponse {
  page: number;
  per_page: number;
  total: number;
  data: UserObj[];
}

export type UserObj = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
