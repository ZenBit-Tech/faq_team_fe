import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from 'components/fillProfileForm/cardInfoCard/checkoutForm';
import { TabProps } from 'components/fillProfileForm/types';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY as string,
);

const CreditCardForm = ({ setSelectedIndex, index }: TabProps) => {
  const options = {
    mode: 'setup',
    currency: 'usd',
    paymentMethodCreation: 'manual',
    appearance: {
      theme: 'stripe',
    },
  };

  return (
    <Elements options={options} stripe={stripePromise}>
      <CheckoutForm setSelectedIndex={setSelectedIndex} index={index} />
    </Elements>
  );
};

export default CreditCardForm;
