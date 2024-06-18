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
import { PublicProfileSidebarType } from 'components/publicProfileSidebar/types.ts';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PublicProfileSidebar = ({ fullName, rate }: PublicProfileSidebarType) => {
  const { t } = useTranslation();

  return (
    <SideBarWrapper>
      {/*TEXT IN ELEMENTS IS NOT FINAL RESULT!!! Just during feature in progress*/}
      <SideBarInfo>
        <div></div>
        <UserInfo>
          <ProfileAvatar img={bgImg} />
          <UserName>{fullName}</UserName>
          <UserRating>
            <RatingStarIcon />
            <span>5.0</span> {/*TODO change to rate from db*/}
          </UserRating>
          <FollowButtonWrapper>
            <FollowButton>{t('buttonText.follow')}</FollowButton>
          </FollowButtonWrapper>
        </UserInfo>
      </SideBarInfo>
    </SideBarWrapper>
  );
};

export default PublicProfileSidebar;
