import { CountryData, parseCountry } from 'react-international-phone';

import { countryCodes } from 'const/constants';

export const isValidFileList = (value: FileList): boolean => {
  if (!value || !(value instanceof FileList) || value.length === 0) {
    return false;
  }
  return true;
};

export const convertToBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

export const countries = (defaultCountries: CountryData[]): CountryData[] =>
  defaultCountries.filter(country => {
    const { iso2 } = parseCountry(country);
    return countryCodes.includes(iso2);
  });
