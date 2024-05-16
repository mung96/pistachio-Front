import { EMAIL_REGEX, NICKNAME_REGEX, PASSWORD_REGEX } from "@/constants/regex";
export const checkEmail = (email) => {
  return EMAIL_REGEX.test(email);
};

export const checkNickname = (nickname) => {
  return NICKNAME_REGEX.test(nickname);
};

export const checkPassword = (password) => {
  return PASSWORD_REGEX.test(password);
};

export const checkPasswordConfirm = (password, passwordConfirm) => {
  return password === passwordConfirm;
};
