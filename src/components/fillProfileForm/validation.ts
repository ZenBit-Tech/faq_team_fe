import * as yup from 'yup';

export const sizeSchema = yup
  .object({
    clothSize: yup.string().required(),
    shoeSize: yup.number().required(),
    jeansSize: yup.string().required(),
  })
  .required();

export const roleSchema = yup.object().shape({
  role: yup.string().required(),
});
