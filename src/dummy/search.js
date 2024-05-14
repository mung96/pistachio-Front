import { faker } from "@faker-js/faker/locale/ko";

export const searchResult = Array.from({ length: 30 }, () => ({
  id: faker.string.uuid(),
  image: faker.image.url(),
  nickname: faker.person.fullName({ min: 2, max: 12 }),
  isFollow: faker.datatype.boolean(),
}));
