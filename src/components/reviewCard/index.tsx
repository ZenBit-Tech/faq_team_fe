import {
  ReviewDate,
  ReviewerAvatar,
  ReviewerInfo,
  ReviewerName,
} from './styles.ts';
import bgImg from 'assets/images/default_profile_img.png';
import { UserRating } from 'components/publicProfileSidebar/styles.ts';
import RatingStarIcon from 'assets/icons/iconRatingStar.tsx';
import ReadMore from 'components/readMore';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, enim, ' +
  'sapiente? Beatae cumque dicta doloribus ea eos inventore nam nulla possimus quam ' +
  'quidem, saepe, sapiente, sint velit! A adipisci aliquid animi assumenda ' +
  'aut dicta eaque error et excepturi explicabo facere, facilis illo impedit, ' +
  'nisi quae quaerat, quos rem sint tempore.'; //TODO remove and change list text fetched from server

const ReviewCard = () => {
  return (
    <li>
      <ReviewerInfo>
        <div>
          <ReviewerAvatar img={bgImg} />
          <div>
            <ReviewerName>Reviewer Name</ReviewerName>{' '}
            {/*TODO change to fetched data*/}
            <ReviewDate>Sep 22, 2023</ReviewDate>
          </div>
        </div>
        <UserRating>
          <RatingStarIcon />
          <span>5.0</span>
        </UserRating>
      </ReviewerInfo>
      <ReadMore text={text} amountOfWords={20} />
    </li>
  );
};

export default ReviewCard;
