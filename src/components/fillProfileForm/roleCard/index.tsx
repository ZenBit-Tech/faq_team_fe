import { useRef } from 'react';
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

  const buyerRef = useRef<HTMLInputElement>(null);
  const vendorRef = useRef<HTMLInputElement>(null);

  const handleDivClick = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <StyledForm>
      <StyledFormContainer>
        <StyledTitle>{t('fillProfile.roleCard.title')}</StyledTitle>
        <StyledSubtitle>{t('fillProfile.roleCard.subTitle')}</StyledSubtitle>
      </StyledFormContainer>
      <StyledRadioGroup>
        <div onClick={() => handleDivClick(buyerRef)}>
          <StyledInput
            type="radio"
            name={radioFormName}
            value={UserRoles.Buyer}
            ref={buyerRef}
          />
          {t('fillProfile.roleCard.buyer')}
        </div>
        <div onClick={() => handleDivClick(vendorRef)}>
          <StyledInput
            type="radio"
            name={radioFormName}
            value={UserRoles.Vendor}
            ref={vendorRef}
          />
          {t('fillProfile.roleCard.vendor')}
        </div>
      </StyledRadioGroup>
    </StyledForm>
  );
};

export default RoleCard;
