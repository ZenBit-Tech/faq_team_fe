import DownArrowIcon from 'assets/icons/iconDownArrow';
import { Container } from 'pages/superAdminLayout/styles';

import { AdminAvatar, AdminName, AdminProfile, Header } from './styles';

const name = 'Anna Asol';
const title = 'Admin';
const initials = 'AA';
const SuperAdminHeader = () => {
  return (
    <Header>
      <Container>
        <AdminProfile>
          <AdminAvatar>{initials}</AdminAvatar>
          <AdminName>
            <div className="name">{name}</div>
            <div className="title">{title}</div>
          </AdminName>
          <button>
            <DownArrowIcon />
          </button>
        </AdminProfile>
      </Container>
    </Header>
  );
};

export default SuperAdminHeader;
