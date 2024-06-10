export type Response<T> = {
  data: T;
  message: string;
};

export type User = {
  name: string;
  email: string;
  role: string;
};

export type RequestRegistration = {
  full_name: string;
  email: string;
  password: string;
};

export type ResponseRegistration = {
  email: string;
};

export type RequestLogin = {
  email: string;
  password: string;
};

export type ResponseLogin = {
  access_token: string;
  is_verified: boolean;
};

export type AuthState = {
  user: User;
  access_token: string;
};

export type RequestNewPass = {
  password: string;
  email: string;
};

export type ResponseVerifyOtp = {
  is_verified: boolean;
};

export type RequestVerifyOtp = {
  otp_code: string;
  email: string;
};
