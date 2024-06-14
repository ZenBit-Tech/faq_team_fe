import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LogoutIcon from 'assets/icons/logoutIcon';
import OrdersIcon from 'assets/icons/ordersIcon';
import SupportIcon from 'assets/icons/supportIcon';
import UserIcon from 'assets/icons/userIcon';
import WishListIcon from 'assets/icons/wishListIcon';
import defaultAvatar from 'assets/images/default-avatar.png';
import { paths } from 'const/paths';

import {
  Avatar,
  DeleteAccBtn,
  EvenNavLink,
  MobTitle,
  ModeList,
  NavList,
  OddNavLink,
  UserName,
} from './styles';
import { ProfileNavBarProps } from './types';

const avatarSize: number = 120;
const iconsSize: number = 32;

export const ProfileNavBar = ({ toggleModal }: ProfileNavBarProps) => {
  const { t } = useTranslation();
  const [isVendor, setIsVendor] = useState<boolean>(false);

  const handleUserMode = () => {
    setIsVendor(!isVendor);
  };
  return (
    <>
      <MobTitle>{t('profileNav.mobTitle')}</MobTitle>
      <Avatar
        src={defaultAvatar}
        alt="user-avatar"
        width={avatarSize}
        height={avatarSize}
      />
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
            <UserIcon width={iconsSize} height={iconsSize} />
            <span>{t('profileNav.navLinks.info')}</span>
          </OddNavLink>
        </li>
        {isVendor ? null : (
          <li>
            <EvenNavLink to="">
              <OrdersIcon width={iconsSize} height={iconsSize} />
              <span>{t('profileNav.navLinks.orders')}</span>
            </EvenNavLink>
          </li>
        )}
        {isVendor ? null : (
          <li>
            <OddNavLink to="">
              <WishListIcon width={iconsSize} height={iconsSize} />
              <span>{t('profileNav.navLinks.wishlist')}</span>
            </OddNavLink>
          </li>
        )}
        <li>
          <EvenNavLink to="">
            <SupportIcon width={iconsSize} height={iconsSize} />
            <span>{t('profileNav.navLinks.support')}</span>
          </EvenNavLink>
        </li>
        <li>
          <OddNavLink to="">
            <LogoutIcon width={iconsSize} height={iconsSize} />
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
