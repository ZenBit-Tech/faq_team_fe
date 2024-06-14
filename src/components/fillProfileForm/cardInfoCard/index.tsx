import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from 'components/fillProfileForm/cardInfoCard/checkoutForm';
import {
  StyledCard,
  StyledFormContainer,
  StyledSubtitle,
  StyledTitle,
} from 'components/fillProfileForm/sharedStyles';
import { stripePaymentCurrency } from 'const/constants';
import stripe from 'stripe';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY as string,
);

// SHOULD BE MOVED TO SERVER
const items = ['someItem1', 'someItem2'];
const calculateOrderAmount = (items: string[]) => {
  const testSum = items.length;
  return testSum;
};

const CreditCardForm = () => {
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
          amount: calculateOrderAmount(items),
          currency: stripePaymentCurrency,
          automatic_payment_methods: {
            enabled: true,
          },
        });
        setClientSecret(paymentIntent.client_secret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
      }
    };

    foo();
  }, [newStripe.paymentIntents]);

  const options = {
    clientSecret,
    theme: 'stripe',
  };

  return (
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
  );
};

export default CreditCardForm;
