import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid';

import CheckoutForm from 'components/fillProfileForm/cardInfoCard/checkoutForm';
import {
  ButtonsContainer,
  StyledButton,
  StyledCard,
  StyledFormContainer,
  StyledSubtitle,
  StyledTabContainer,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import { ButtonVariant, TabProps } from 'components/fillProfileForm/types';
import { stripePaymentCurrency } from 'const/constants';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY as string,
);

// SHOULD BE MOVED TO SERVER
const calculateOrderAmount = () => {
  const testSum = 1000;
  return testSum;
};

const CreditCardForm = ({ setSelectedIndex, index }: TabProps) => {
  const { t } = useTranslation();

  const [clientSecret, setClientSecret] = useState<string | null>(null);

  // SHOULD BE MOVED TO SERVER
  const newStripe = new stripe(
    import.meta.env.VITE_STRIPE_SECRET_KEY as string,
  );

  // SHOULD BE MOVED TO SERVER
  useEffect(() => {
    const foo = async (): Promise<void> => {
      try {
        const paymentIntent = await newStripe.paymentIntents.create({
          amount: calculateOrderAmount(),
          currency: stripePaymentCurrency,
          automatic_payment_methods: {
            enabled: true,
          },
        });
        setClientSecret(paymentIntent.client_secret);
      } catch (error) {
        throw new Error();
      }
    };

    foo();
  }, []);

  const options = {
    clientSecret,
    theme: 'stripe',
  };

  return (
    <StyledTabContainer>
      <StyledCard>
        <StyledFormContainer>
          <StyledTitle>{t('fillProfile.cardInfoCard.title')}</StyledTitle>
          <StyledSubtitle>
            {t('fillProfile.cardInfoCard.subTitle')}
          </StyledSubtitle>
        </StyledFormContainer>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </StyledCard>
      <ButtonsContainer>
        <StyledButton
          variant={ButtonVariant.White}
          onClick={() => setSelectedIndex(index - 1)}
          key={uuidv4()}
        >
          {t('fillProfile.prevButton')}
        </StyledButton>
        <StyledButton
          key={uuidv4()}
          variant={ButtonVariant.Black}
          onClick={() => setSelectedIndex(index + 1)}
        >
          {t('fillProfile.nextButton')}
        </StyledButton>
      </ButtonsContainer>
    </StyledTabContainer>
  );
};

export default CreditCardForm;
