import {
  StyledForm,
  StyledTitle,
  StyledSubtitle,
  StyledRadioGroup,
  StyledFormContainer,
  StyledInput,
} from './styles';

const RoleCard = () => {
  return (
    <StyledForm>
      <StyledFormContainer>
        <StyledTitle>Title</StyledTitle>
        <StyledSubtitle>Subtitle</StyledSubtitle>
      </StyledFormContainer>
      <StyledRadioGroup>
        <label>
          <StyledInput type="radio" name="option" value="Buyer" />
          Buyer
        </label>
        <label>
          <StyledInput type="radio" name="option" value="Vendor" />
          Vendor
        </label>
      </StyledRadioGroup>
    </StyledForm>
  );
};

export default RoleCard;
