import UserIcon from 'assets/icons/userIcon';
import { useTranslation } from 'react-i18next';
import defaultAvatar from 'assets/images/default-avatar.png';
import OrdersIcon from 'assets/icons/ordersIcon';
import WishListIcon from 'assets/icons/wishListIcon';
import SupportIcon from 'assets/icons/supportIcon';
import LogoutIcon from 'assets/icons/logoutIcon';
import { paths } from 'const/paths';
import { useState } from 'react';
import {
  Avatar,
  MobTitle,
  UserName,
  ModeList,
  NavList,
  OddNavLink,
  EvenNavLink,
  DeleteAccBtn,
} from './styles';
import { ProfileNavBarProps } from './types';

export const ProfileNavBar = ({ toggleModal }: ProfileNavBarProps) => {
  const { t } = useTranslation();
  const [isVendor, setIsVendor] = useState<boolean>(false);

  const handleUserMode = () => {
    setIsVendor(!isVendor);
  };
  return (
    <>
      <MobTitle>{t('profileNav.mobTitle')}</MobTitle>
      <Avatar src={defaultAvatar} alt="user-avatar" width={120} height={120} />
      <UserName>{t('profileNav.username')}</UserName>
      <ModeList>
        <li>
          <p>
            {isVendor
              ? t('profileNav.mode.vendor')
              : t('profileNav.mode.buyer')}
          </p>
        </li>
        <li>
          <button type="button" onClick={handleUserMode}>
            {isVendor
              ? t('profileNav.button.vendor')
              : t('profileNav.button.buyer')}
          </button>
        </li>
      </ModeList>
      <NavList>
        <li>
          <OddNavLink to={paths.personalInfo}>
            <UserIcon width={32} height={32} />
            <span>{t('profileNav.navLinks.info')}</span>
          </OddNavLink>
        </li>
        {isVendor ? null : (
          <li>
            <EvenNavLink to="">
              <OrdersIcon width={32} height={32} />
              <span>{t('profileNav.navLinks.orders')}</span>
            </EvenNavLink>
          </li>
        )}
        {isVendor ? null : (
          <li>
            <OddNavLink to="">
              <WishListIcon width={32} height={32} />
              <span>{t('profileNav.navLinks.wishlist')}</span>
            </OddNavLink>
          </li>
        )}
        <li>
          <EvenNavLink to="">
            <SupportIcon width={32} height={32} />
            <span>{t('profileNav.navLinks.support')}</span>
          </EvenNavLink>
        </li>
        <li>
          <OddNavLink to="">
            <LogoutIcon width={32} height={32} />
            <span>{t('profileNav.navLinks.logout')}</span>
          </OddNavLink>
        </li>
      </NavList>
      <DeleteAccBtn type="button" onClick={toggleModal}>
        {t('deleteAccount.button')}
      </DeleteAccBtn>
    </>
  );
};
