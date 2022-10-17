import * as Yup from 'yup';

const digitsOnly = (value: string | undefined) => value !== undefined && /^\d+$/.test(value);

export default () =>
  Yup.object().shape({
    amount: Yup.number().required().positive(),
    account: Yup.string()
      .test('Digits only', 'The field should have digits only', digitsOnly)
      .required(),
    address: Yup.string().required(),
    description: Yup.string().required()
  });
