import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import TrashIcon from 'assets/icons/iconTrash';
import { useDeleteUser } from 'components/table/useDeleteUserHook';
import { useGetUserQuery } from 'redux/authApiSlice';

import {
  ActionBtn,
  Card,
  CardInner,
  HeaderContainer,
  Info,
  Title,
} from './styles';

export const UserProfileCard = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data: user } = useGetUserQuery(id!);
  const { deleteHandler, error } = useDeleteUser();

  return (
    <Card>
      <CardInner key={user?.id}>
        <HeaderContainer>
          <Title>
            {user?.full_name} {t('viewProfile.title')}
          </Title>
          <ActionBtn onClick={() => deleteHandler(id!, true)}>
            <TrashIcon />
          </ActionBtn>
        </HeaderContainer>
        <Info>
          <div>
            <h5>{t('viewProfile.name')}</h5>
            <p>{user?.full_name}</p>
          </div>
          <div>
            <h5>{t('viewProfile.email')}</h5>
            <p>{user?.email}</p>
          </div>
          <div>
            <h5>{t('viewProfile.phone')}</h5>
            <p>{user?.phone}</p>
          </div>
          <div>
            <h5>{t('viewProfile.address')}</h5>
            <p>
              {user?.address} {user?.city} {user?.country}{' '}
            </p>
          </div>
          <div>
            <h5>{t('viewProfile.status')}</h5>
            <p>{user?.user_status}</p>
          </div>
        </Info>
        {error ? <div>{error}</div> : null}
      </CardInner>
    </Card>
  );
};
