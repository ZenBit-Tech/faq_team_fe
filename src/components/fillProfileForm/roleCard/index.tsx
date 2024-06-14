import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';

import {
  StyledInput,
  StyledRadioGroup,
} from 'components/fillProfileForm/roleCard/styles';
import {
  ButtonsContainer,
  StyledButton,
  StyledForm,
  StyledFormContainer,
  StyledSubtitle,
  StyledTabContainer,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import {
  ButtonVariant,
  RoleFormData,
  TabProps,
  UserRoles,
} from 'components/fillProfileForm/types';
import { roleSchema } from 'components/fillProfileForm/validation';

const RoleCard = ({ setSelectedIndex, index }: TabProps) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoleFormData>({
    resolver: yupResolver(roleSchema),
  });

  const onSubmit: SubmitHandler<RoleFormData> = data => {
    JSON.stringify(data);
    setSelectedIndex(index + 1);
  };

  const buyerRef = useRef<HTMLInputElement>(null);
  const vendorRef = useRef<HTMLInputElement>(null);

  const handleDivClick = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <StyledTabContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledForm>
          <StyledFormContainer>
            <StyledTitle>{t('fillProfile.roleCard.title')}</StyledTitle>
            <StyledSubtitle>
              {t('fillProfile.roleCard.subTitle')}
            </StyledSubtitle>
          </StyledFormContainer>
          <StyledRadioGroup>
            <div onClick={() => handleDivClick(buyerRef)}>
              <StyledInput
                type="radio"
                value={UserRoles.Buyer}
                {...register('role')}
              />
              {t('fillProfile.roleCard.buyer')}
            </div>
            <div onClick={() => handleDivClick(vendorRef)}>
              <StyledInput
                type="radio"
                {...register('role')}
                value={UserRoles.Vendor}
              />
              {t('fillProfile.roleCard.vendor')}
            </div>
          </StyledRadioGroup>
          {errors.role && <p>{errors.role.message}</p>}
        </StyledForm>
        <ButtonsContainer>
          <StyledButton
            type="submit"
            variant={ButtonVariant.Black}
            key={uuidv4()}
          >
            {t('fillProfile.nextButton')}
          </StyledButton>
        </ButtonsContainer>
      </form>
    </StyledTabContainer>
  );
};

export default RoleCard;
