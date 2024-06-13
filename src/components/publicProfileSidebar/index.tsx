import {
  FollowButton,
  FollowButtonWrapper,
  ProfileAvatar,
  SideBarInfo,
  SideBarWrapper,
  UserInfo,
  UserName,
  UserRating,
} from 'components/publicProfileSidebar/styles.ts';
import bgImg from 'assets/images/default_profile_img.png';
import RatingStarIcon from 'assets/icons/iconRatingStar.tsx';

const PublicProfileSidebar = () => {
  return (
    <SideBarWrapper>
      {/*TEXT IN ELEMENTS IS NOT FINAL RESULT!!! Just during feature in progress*/}
      <SideBarInfo>
        <div>
          Home {'>'} Vendors {'>'} Vendor Name{' '}
        </div>
        <UserInfo>
          <ProfileAvatar img={bgImg} />
          <UserName>Vendor Name</UserName>
          <UserRating>
            <RatingStarIcon />
            <span>5.0</span>
          </UserRating>
          <FollowButtonWrapper>
            <FollowButton>Follow</FollowButton>
          </FollowButtonWrapper>
        </UserInfo>
      </SideBarInfo>
    </SideBarWrapper>
  );
};

export default PublicProfileSidebar;
