import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  useFollowUserMutation,
  useGetIsFollowingQuery,
} from 'redux/userApiSlice.ts';

import RatingStarIcon from 'assets/icons/iconRatingStar.tsx';
import bgImg from 'assets/images/default_profile_img.png';
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
import { PublicProfileSidebarType } from 'components/publicProfileSidebar/types.ts';
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from 'helpers/errorHandler.ts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PublicProfileSidebar = ({
  fullName,
  avgRate,
  userId,
}: PublicProfileSidebarType) => {
  const { t } = useTranslation();

  const [error, setError] = useState<string>();

  const { data: isFollowing, refetch } = useGetIsFollowingQuery(userId!);
  const [followUser] = useFollowUserMutation();

  const handleFollow = async () => {
    try {
      await followUser(userId!);
      refetch();
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg = 'error' in err ? err.error : JSON.stringify(err.data);
        setError(errMsg);
      } else if (isErrorWithMessage(err)) {
        setError(err.message);
      }
    }
  };

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
          <FollowButtonWrapper>
            <FollowButton disabled={isFollowing} onClick={handleFollow}>
              {isFollowing ? t('buttonText.followed') : t('buttonText.follow')}
            </FollowButton>
            {error ? <div>{error}</div> : null}
          </FollowButtonWrapper>
        </UserInfo>
      </SideBarInfo>
    </SideBarWrapper>
  );
};

export default PublicProfileSidebar;
