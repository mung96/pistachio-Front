export const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[comA-Z]{2,3}$/;

//2자 이상 8자 이하 닉네임
export const NICKNAME_REGEX = "/^[A-Za-z가-힣ㄱ-ㅎ]{2,8}$/";

//특수문자를 포함하지않고, 8자이상 대소문자 구분없이, 숫자포함
export const PASSWORD_REGEX = /(?=.[a-z])(?=.[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/; //8자리 이상의 알파벳 소문자, 숫자 및 특수문자의 조합
