import { useTranslation } from 'react-i18next';
import IconSort from 'assets/icons/iconSort';
import { HeaderContainer, Title, SortButton } from './styles';
import { SortProps } from './types';

const TableSort = ({ onClickHandler }: SortProps) => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <Title>{t('admin.usersSubTitle')}</Title>
      <SortButton onClick={onClickHandler}>
        {t('admin.sort')} <IconSort />
      </SortButton>
    </HeaderContainer>
  );
};
export default TableSort;
