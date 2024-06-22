import PublicBuyerTab from 'components/publicByuerTab';
import { PublicProfileInfoWrapper } from 'components/publicProfileInfo/styles.ts';
import { PublicProfileInfoType } from 'components/publicProfileInfo/types.ts';
import PublicVendorTab from 'components/publicVendorTab';
import { userRoles } from 'const/constants.ts';

const PublicProfileInfo = ({
  userRole,
  userReviews,
  userProducts,
}: PublicProfileInfoType) => {
  return (
    <PublicProfileInfoWrapper>
      {userRole === userRoles.buyer ? (
        <PublicBuyerTab userReviews={userReviews} />
      ) : (
        <PublicVendorTab
          userReviews={userReviews}
          userProducts={userProducts}
        />
      )}
    </PublicProfileInfoWrapper>
  );
};

export default PublicProfileInfo;
