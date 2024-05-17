import { EMAIL_REGEX, USERNAME_REGEX, PWD_REGEX } from "@/constants/regex";
export const checkEmail = (email) => {
  return EMAIL_REGEX.test(email);
};

export const checkUsername = (username) => {
  return USERNAME_REGEX.test(username);
};

export const checkPwd = (pwd) => {
  return PWD_REGEX.test(pwd);
};

export const checkPwdConfirm = (pwd, pwdConfirm) => {
  return pwd === pwdConfirm;
};
