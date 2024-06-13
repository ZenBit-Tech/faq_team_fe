import FirstStepActive from 'assets/icons/steps/step1_active';
import SecondStepActive from 'assets/icons/steps/step2_active';
import SecondStepInactive from 'assets/icons/steps/step2_inactive';
import ThirdStepActive from 'assets/icons/steps/step3_active';
import ThirdStepInactive from 'assets/icons/steps/step3_inactive';
import FourthStepActive from 'assets/icons/steps/step4_active';
import FourthStepInactive from 'assets/icons/steps/step4_inactive';
import FifthStepActive from 'assets/icons/steps/step5_active';
import FifthStepInactive from 'assets/icons/steps/step5_inactive';
import AddressForm from 'components/fillProfileForm/addressCard';
import CreditCardForm from 'components/fillProfileForm/cardInfoCard';
import GeneralInfoCard from 'components/fillProfileForm/generalInfoCard';
import RoleCard from 'components/fillProfileForm/roleCard';
import SizeForm from 'components/fillProfileForm/sizeCard';

export const iconsActive = [
  <FirstStepActive />,
  <SecondStepActive />,
  <ThirdStepActive />,
  <FourthStepActive />,
  <FifthStepActive />,
];
export const iconsInactive = [
  <></>,
  <SecondStepInactive />,
  <ThirdStepInactive />,
  <FourthStepInactive />,
  <FifthStepInactive />,
];
export const tabs = [
  <RoleCard />,
  <GeneralInfoCard />,
  <AddressForm />,
  <CreditCardForm />,
  <SizeForm />,
];
