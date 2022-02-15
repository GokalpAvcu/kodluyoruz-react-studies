import { object, string, number, date, InferType } from 'yup';

const validations = object({
    email: string().email(),
    password: string().min(5).required(),
    passwordConfirm: string().oneOf([('password')]).required(),
});

  export default validations;