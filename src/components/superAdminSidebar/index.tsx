import { useTranslation } from 'react-i18next';
import ChatIcon from 'assets/icons/iconChat';
import LogoIcon from 'assets/icons/iconLogo';
import ProductsIcon from 'assets/icons/iconProducts';
import UserIcon from 'assets/icons/iconUser';
import UsersIcon from 'assets/icons/iconUsers';
import { paths } from 'const/paths';

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
            <MenuLink to={paths.defaultPath}>{t('admin.usersTitle')}</MenuLink>
          </MenuItem>
          <MenuItem>
            <ProductsIcon />
            <MenuLink to={paths.defaultPath}>{t('admin.products')}</MenuLink>
          </MenuItem>
          <MenuItem>
            <ChatIcon />
            <MenuLink to={paths.defaultPath}>{t('admin.chat')}</MenuLink>
          </MenuItem>
          <MenuItem>
            <UserIcon />
            <MenuLink to={paths.defaultPath}>{t('admin.roles')}</MenuLink>
          </MenuItem>
        </Menu>
      </NavBar>
    </SideBar>
  );
};

export default SuperAdminSidebar;
