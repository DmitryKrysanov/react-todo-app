// required
export const required = (value: string) => {
  return value ? undefined : "Field is required";
};

// text
export const minLengthText = (value: string) => {
  return value.length < 2 ? "Min length is 2" : undefined;
};

export const maxLengthText = (value: string) => {
  return value.length === 140 ? "Max length is 140" : undefined;
};

// email
export const email = (value: string) => {
  return emailValidation(value) ? undefined : "Invalid email";
};

const emailValidation = (email: string): boolean => {
  const regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regExp.test(email);
};

// password
export const password = (value: string) => {
  return passwordValidation(value) ? undefined : "Invalid password";
};

const passwordValidation = (password: string): boolean => {
  const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
  return regExp.test(password);
};

export const passwordMinLength = (value: string) => {
  return value.length < 6 ? "Min length is 6" : undefined;
};

export const passwordMaxLength = (value: string) => {
  return value.length < 140 ? "Max length is 140" : undefined;
};

// compose
export const composeValidators = (...validators: any) => (value: any) => {
  return validators.reduce(
    (error: any, validator: any) => error || validator(value),
    undefined
  );
};
