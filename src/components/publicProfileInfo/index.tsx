import {
  ProductsTab,
  PublicProfileInfoWrapper,
  ReviewDate,
  ReviewerAvatar,
  ReviewerInfo,
  ReviewerName,
  ReviewsTab,
  ReviewsWrapper,
  ReviewText,
  VendorTabsWrapper,
} from 'components/publicProfileInfo/styles.ts';
import RatingStarIcon from 'assets/icons/iconRatingStar.tsx';
import { UserRating } from 'components/publicProfileSidebar/styles.ts';
import bgImg from 'assets/images/default_profile_img.png';
import ReadMore from 'components/readMore';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, enim, sapiente? Beatae cumque dicta doloribus ea eos inventore nam nulla possimus quam quidem, saepe, sapiente, sint velit! A adipisci aliquid animi assumenda aut dicta eaque error et excepturi explicabo facere, facilis illo impedit, nisi quae quaerat, quos rem sint tempore.';

const PublicProfileInfo = () => {
  return (
    <PublicProfileInfoWrapper>
      <VendorTabsWrapper>
        <ProductsTab>Products</ProductsTab>
        <ReviewsTab>Reviews(10)</ReviewsTab>
      </VendorTabsWrapper>
      <ReviewsWrapper>
        <h2>Reviews(10)</h2>
        <ul>
          <li>
            <ReviewerInfo>
              <div>
                <ReviewerAvatar img={bgImg} />
                <div>
                  <ReviewerName>Reviewer Name</ReviewerName>
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
          <li>
            <ReviewerInfo>
              <div>
                <ReviewerAvatar img={bgImg} />
                <div>
                  <ReviewerName>Reviewer Name</ReviewerName>
                  <ReviewDate>Sep 22, 2023</ReviewDate>
                </div>
              </div>
              <UserRating>
                <RatingStarIcon />
                <span>5.0</span>
              </UserRating>
            </ReviewerInfo>
            <ReviewText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              enim error esse qui soluta. Dolor iure quas quibusdam repellendus
              suscipit!
            </ReviewText>
          </li>
          <li>
            <ReviewerInfo>
              <div>
                <ReviewerAvatar img={bgImg} />
                <div>
                  <ReviewerName>Reviewer Name</ReviewerName>
                  <ReviewDate>Sep 22, 2023</ReviewDate>
                </div>
              </div>
              <UserRating>
                <RatingStarIcon />
                <span>5.0</span>
              </UserRating>
            </ReviewerInfo>
            <ReviewText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              enim error esse qui soluta. Dolor iure quas quibusdam repellendus
              suscipit!
            </ReviewText>
          </li>
        </ul>
      </ReviewsWrapper>
    </PublicProfileInfoWrapper>
  );
};

export default PublicProfileInfo;
