export type Response<T> = {
  data: T;
  message: string;
};

export type User = {
  name: string;
  email: string;
  role: string;
};

export type AuthState = {
  user: User;
  token: string;
};
