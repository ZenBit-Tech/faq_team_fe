import { useTranslation } from 'react-i18next';
import {
  StyledInput,
  StyledRadioGroup,
} from 'components/fillProfileForm/roleCard/styles';
import { UserRoles } from 'components/fillProfileForm/roleCard/types';
import {
  StyledForm,
  StyledFormContainer,
  StyledSubtitle,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';

const radioFormName = 'role';

const RoleCard = () => {
  const { t } = useTranslation();

  return (
    <StyledForm>
      <StyledFormContainer>
        <StyledTitle>{t('fillProfile.roleCard.title')}</StyledTitle>
        <StyledSubtitle>{t('fillProfile.roleCard.subTitle')}</StyledSubtitle>
      </StyledFormContainer>
      <StyledRadioGroup>
        <label>
          <StyledInput
            type="radio"
            name={radioFormName}
            value={UserRoles.Buyer}
          />
          {t('fillProfile.roleCard.buyer')}
        </label>
        <label>
          <StyledInput
            type="radio"
            name={radioFormName}
            value={UserRoles.Vendor}
          />
          {t('fillProfile.roleCard.vendor')}
        </label>
      </StyledRadioGroup>
    </StyledForm>
  );
};

export default RoleCard;
