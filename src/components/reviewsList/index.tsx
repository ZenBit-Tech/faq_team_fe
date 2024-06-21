import { useTranslation } from 'react-i18next';

import { PublicProfileInfoType } from 'components/publicProfileInfo/types.ts';
import ReviewCard from 'components/reviewCard';
import { ReviewsWrapper } from 'components/reviewsList/styles.ts';

const ReviewsList = ({ userReviews }: Partial<PublicProfileInfoType>) => {
  const { t } = useTranslation();

  return (
    <ReviewsWrapper>
      <h2>
        {t('titleText.reviews')}({userReviews?.length})
      </h2>
      <ul>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </ul>
    </ReviewsWrapper>
  );
};

export default ReviewsList;
