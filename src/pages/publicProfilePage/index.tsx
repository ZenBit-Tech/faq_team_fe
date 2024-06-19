import PublicProfileSidebar from 'components/publicProfileSidebar';
import PublicProfileInfo from 'components/publicProfileInfo';
import { PublicProfileContainer } from 'pages/publicProfilePage/styles.ts';
import { useParams } from 'react-router-dom';
import { useGetPublicInfoQuery } from '../../redux/authApiSlice.ts';

const PublicProfilePage = () => {
  const { id: userTargetId } = useParams();
  const { data } = useGetPublicInfoQuery(userTargetId);

  return (
    <PublicProfileContainer>
      {data?.id && (
        <PublicProfileSidebar
          fullName={data?.full_name}
          avgRate={data?.avgRate}
          userId={data?.id}
        />
      )}
      <PublicProfileInfo
        userReviews={data?.user_reviews}
        userRole={data?.user_role}
        userProducts={data?.products}
      />
    </PublicProfileContainer>
  );
};

export default PublicProfilePage;
