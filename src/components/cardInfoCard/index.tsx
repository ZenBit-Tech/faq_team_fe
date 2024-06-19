import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import stripe from 'stripe';

import CheckoutForm from './checkoutForm';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY as string,
);

// SHOULD BE MOVED TO SERVER
const calculateOrderAmount = () => {
  const sum = 1000;
  return sum;
};

const CreditCardForm = () => {
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
          currency: 'usd',
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
  }, []);

  const options = {
    clientSecret,
    theme: 'stripe',
  };

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default CreditCardForm;
