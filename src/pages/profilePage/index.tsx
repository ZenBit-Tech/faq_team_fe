import { ProfileNavBar } from 'components/profileNavBar';
import { Outlet } from 'react-router-dom';
import {
  OutletWrap,
  ProfileNavBarWrap,
  ProfileSection,
  ProfileSectionWrap,
  TitleSection,
} from './styles';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { DeleteAccountModal } from 'components/deleteAccountModal';

const ProfilePage = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  return (
    <>
      <TitleSection>
        <p>{t('profileNav.title')}</p>
      </TitleSection>
      <ProfileSection>
        <ProfileSectionWrap>
          <ProfileNavBarWrap>
            <ProfileNavBar toggleModal={toggleModal} />
          </ProfileNavBarWrap>
          <OutletWrap>
            <Outlet />
          </OutletWrap>
        </ProfileSectionWrap>
      </ProfileSection>
      {isModalOpen && (
        <DeleteAccountModal isModalOpen={isModalOpen} onClose={toggleModal} />
      )}
    </>
  );
};

export default ProfilePage;
