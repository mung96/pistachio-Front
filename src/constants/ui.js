export const SEARCH_BAR_PLACEHOLDER = "단체, 피스타치오, 프로젝트 검색";

export const FOLLOW_FALSE_BTN_TEXT = "팔로우";
export const FOOLLW_TRUE_BTN_TEXT = "팔로우한 상대";

export const POST_IMAGE_MAX = 10;
export const POST_CONTENT_LENGTH = 300;

export const FIELD = {
  USER_TYPE: "userType",
  EMAIL: "email",
  EMAIL_AUTH: "emailAuth",
  USER_NAME: "name",
  PWD: "password",
  PWD_CONFIRM: "passwordConfirm",
};

export const EMAIL_AUTH_LENGTH = 6;
export const EMAIL_AUTY_TIME = 5;
export const NICKNAME_MIN_LENGTH = 2;
export const NICKNAME_MAX_LENGTH = 8;

export const TYPE = {
  [FIELD.EMAIL]: "email",
  [FIELD.EMAIL_AUTH]: "number",
  [FIELD.PWD]: "password",
};

export const PLACEHOLDER = {
  [FIELD.EMAIL]: "pistachio@gmail.com",
  [FIELD.EMAIL_AUTH]: `인증번호 ${EMAIL_AUTH_LENGTH} 자리`,
  [FIELD.USER_NAME]: "다른 사람에게 보일 이름이에요.",
  [FIELD.PWD]: "비밀번호를 입력해주세요.",
  [FIELD.PWD_CONFIRM]: "비밀번호를 한번 더 입력해주세요.",
};

export const MESSAGE = {
  [FIELD.EMAIL]: "아이디로 사용될 이메일이에요",
  [FIELD.EMAIL_AUTH]: "인증번호가 발송됐습니다.",
  [FIELD.USER_NAME]: `이름은 ${NICKNAME_MIN_LENGTH}자이상 ${NICKNAME_MAX_LENGTH}자 이하로 지어주세요`,
  [FIELD.PWD]: "비밀번호는 영어,숫자,특수문자를 조합해 8자 이상으로 해주세요.",
};

export const DUPLICATE_ERROR_MESSAGE = {
  [FIELD.EMAIL]: "이미 가입된 이메일이에요",
  [FIELD.EMAIL_AUTH]: "인증번호가 올바르지 않습니다.",
  [FIELD.USER_NAME]: "이미 있는 이름이에요.",
};

export const FORMAT_ERROR_MESSAGE = {
  [FIELD.EMAIL]: "이메일 형식이 올바르지 않습니다.",
  [FIELD.EMAIL_AUTH]: "",
  [FIELD.USER_NAME]: `이름은 ${NICKNAME_MIN_LENGTH}자이상 ${NICKNAME_MAX_LENGTH}자 이하만 가능합니다`,
  [FIELD.PWD]: "비밀번호는 영어,숫자,특수문자를 조합해 8자 이상으로 해주세요.",
  [FIELD.PWD_CONFIRM]: "비밀번호와 일치하지 않습니다.",
};

export const FORMAT_SUCCESS_MESSAGE = {
  [FIELD.EMAIL]: "올바른 이메일 형식입니다.",
  [FIELD.USER_NAME]: "이제 중복확인을 해주세요.",
};

export const DUPLICATE_SUCCESS_MESSAGE = {
  [FIELD.USER_NAME]: "사용가능한 이름입니다.",
};

//비밀번호 대소문자 구분없이
