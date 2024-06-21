import { ReviewsWrapper } from 'components/reviewsList/styles.ts';
import ReviewCard from 'components/reviewCard';
import { PublicProfileInfoType } from 'components/publicProfileInfo/types.ts';
import { useTranslation } from 'react-i18next';

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
