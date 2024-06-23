import { useTranslation } from 'react-i18next';

import RatingStarIcon from 'assets/icons/iconRatingStar.tsx';
import bgImg from 'assets/images/default_profile_img.png';
import FollowButton from 'components/followButton';
import {
  ProfileAvatar,
  SideBarInfo,
  SideBarWrapper,
  UserInfo,
  UserName,
  UserRating,
} from 'components/publicProfileSidebar/styles.ts';
import { PublicProfileSidebarType } from 'components/publicProfileSidebar/types.ts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PublicProfileSidebar = ({
  fullName,
  avgRate,
  userId,
}: PublicProfileSidebarType) => {
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
            <span>{avgRate ? avgRate : t('userInfo.noRate')}</span>{' '}
            {/*TODO change to rate from db*/}
          </UserRating>
          <FollowButton userId={userId} />
        </UserInfo>
      </SideBarInfo>
    </SideBarWrapper>
  );
};

export default PublicProfileSidebar;
