export const otpFormVersions = {
  verifyEmail: 'register',
  newPass: 'newPass',
};

export const passLengthLim = 8;

export const otpExpirationTime = 55;
export const otpNumberOfDigits = 6;
export const clockPrecision = 1000;

export const stripePaymentCurrency = 'usd';

export const countriesOptions = ['Canada'] as const;
export const statesOptions = {
  Canada: ['Ontario', 'Quebec', 'British Columbia'],
} as const;
export const citiesOptions = {
  Canada: ['Toronto', 'Montreal', 'Vancouver'],
} as const;

export const countryCodes = ['ca'];
export const phoneLength = 10;

export const imageFormat = '.png,.heic,.jpeg';
