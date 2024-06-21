export type Response<T> = {
  data: T;
  message: string;
};

export type User = {
  name: string;
  email: string;
  role: string;
  id: string;
};

export type RequestRegistration = {
  full_name: string;
  email: string;
  password: string;
};

export type ResponseRegistration = {
  email: string;
};

export type ResponseGetUser = {
  id: string;
  created_at: Date;
  full_name: string;
  email: string;
  password?: string;
  is_verified: boolean;
  filled_profile_step: number;
  otp_code?: string;
  user_status: string;
  is_deleted_by_admin: boolean;
  user_role?: string;
  avatar?: string;
  phone?: string;
  address?: string;
  address_2?: string;
  country?: string;
  city?: string;
  cloth_size?: string;
  jeans_size?: string;
  shoes_size?: number;
  avgRate?: number;
  user_reviews?: UserReview[];
  rates?: number;
  products?: ResponseGetProduct[];
};

export type ResponseGetProduct = {
  product_name: string;
  photos: string[];
  product_description: string;
  quantity: number;
  offer_type: string;
  price: number;
  is_active: boolean;
};

export type UserReview = {
  review_text: string;
  reviewer_id: string;
  user_target_id: string;
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

export type RequestUpdateUser = {
  user_name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  phone?: string;
  address?: string;
  address_2?: string;
  country?: string;
  city?: string;
  cloth_size?: string;
  jeans_size?: string;
  shoes_size?: number;
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
export type ResponseGetUser = {
  id: string;
  created_at: Date;
  full_name: string;
  email: string;
  password?: string;
  is_verified: boolean;
  filled_profile_step: number;
  otp_code?: string;
  user_status: string;
  is_deleted_by_admin: boolean;
  user_role?: string;
  avatar?: string;
  phone?: string;
  address?: string;
  address_2?: string;
  country?: string;
  city?: string;
  cloth_size?: string;
  jeans_size?: string;
  shoes_size?: number;
};
export type RequestGetUsersWithFilters = {
  page: number;
  limit: number;
  order: 'ASC' | 'DESC';
  search?: string;
};
export type ResponseGetUsersWithFilters = {
  users: ResponseGetUser[];
  totalCount: number;
};

export type AverageSales = {
  averageSales: number;
  lastWeekAveragePercentage: number;
};

export type SalesPerMonth = {
  month: number;
  total: number;
}[];

export type SalesPerCategory = {
  category: string;
  totalSales: number;
  orderCount: number;
}[];

export type RecentSales = {
  order_id: string;
  created_at: Date;
  updated_at: Date;
  product_id: string;
  buyer_id: string;
  order_price: number;
  product_product_name: string;
}[];
