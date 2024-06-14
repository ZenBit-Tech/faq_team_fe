import { useTranslation } from 'react-i18next';
import ChatIcon from 'assets/icons/iconChat';
import LogoIcon from 'assets/icons/iconLogo';
import ProductsIcon from 'assets/icons/iconProducts';
import UserIcon from 'assets/icons/iconUser';
import UsersIcon from 'assets/icons/iconUsers';

import { Menu, MenuItem, MenuLink, NavBar, SideBar } from './styles';

const SuperAdminSidebar = () => {
  const { t } = useTranslation();
  return (
    <SideBar>
      <LogoIcon width={140} />
      <NavBar>
        <Menu>
          <MenuItem>
            <UsersIcon />
            <MenuLink to={''}>{t('admin.usersTitle')}</MenuLink>
          </MenuItem>
          <MenuItem>
            <ProductsIcon />
            <MenuLink to={''}>{t('admin.products')}</MenuLink>
          </MenuItem>
          <MenuItem>
            <ChatIcon />
            <MenuLink to={''}>{t('admin.chat')}</MenuLink>
          </MenuItem>
          <MenuItem>
            <UserIcon />
            <MenuLink to={''}>{t('admin.roles')}</MenuLink>
          </MenuItem>
        </Menu>
      </NavBar>
    </SideBar>
  );
};

export default SuperAdminSidebar;
