import { UserProfileCard } from 'components/viewUserProfileCard';
import { Container } from 'pages/superAdminLayout/styles';

const ViewUserProfilePage = () => {
  return (
    <section>
      <Container>
        <UserProfileCard />
      </Container>
    </section>
  );
};

export default ViewUserProfilePage;
