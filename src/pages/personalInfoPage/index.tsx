import { ResponseGetUser } from 'redux/types';

import { EditProfileForm } from 'components/editProfileForm';

const PersonalInfoPage = ({
  data,
  isLoading,
}: {
  data: ResponseGetUser;
  isLoading: boolean;
}) => {
  return (
    <>
      <EditProfileForm data={data} isLoading={isLoading} />
    </>
  );
};

export default PersonalInfoPage;
