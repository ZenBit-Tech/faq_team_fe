import { PaymentElement } from '@stripe/react-stripe-js';

import { StyledForm, StyledFormWrapper } from './styles';

const CheckoutForm = () => {
  const paymentElementOptions = {
    layout: 'tabs',
    fields: {
      billingDetails: 'never',
    },
  };

  return (
    <StyledFormWrapper>
      <StyledForm id="payment-form">
        <PaymentElement id="payment-element" options={paymentElementOptions} />
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default CheckoutForm;
