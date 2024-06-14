import { useTranslation } from 'react-i18next';
import { TableComponent } from 'components/table';
import { Container } from 'pages/superAdminLayout/styles';
import { UserListTitle, Wrapper, Section } from './styles';

const UserListPage = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container>
        <Wrapper>
          <UserListTitle>{t('admin.usersTitle')}</UserListTitle>
          <TableComponent />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default UserListPage;
