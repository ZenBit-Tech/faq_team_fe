import { ResponseGetProduct, UserReview } from 'redux/types';

export type PublicProfileInfoType = {
  userRole?: string;
  userReviews?: UserReview[];
  userProducts?: ResponseGetProduct[];
};
