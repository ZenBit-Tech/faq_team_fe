import PublicProfileSidebar from 'components/publicProfileSidebar';
import PublicProfileInfo from 'components/publicProfileInfo';
import { PublicProfileContainer } from 'pages/publicProfilePage/styles.ts';

const PublicProfilePage = () => {
  return (
    <PublicProfileContainer>
      <PublicProfileSidebar />
      <PublicProfileInfo />
    </PublicProfileContainer>
  );
};

export default PublicProfilePage;
