import { useTranslation } from 'react-i18next';
import { TableComponent } from 'components/table';
import { Container } from 'pages/superAdminLayout/styles';

import { UserListTitle } from './styles';

const UserListPage = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container>
        <div>
          <UserListTitle>{t('admin.usersTitle')}</UserListTitle>
          <TableComponent />
        </div>
      </Container>
    </section>
  );
};

export default UserListPage;
