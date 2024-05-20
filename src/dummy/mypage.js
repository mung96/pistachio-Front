import { faker } from "@faker-js/faker/locale/ko";

export const projects = Array.from({ length: 30 }, () => ({
  projectId: faker.string.uuid(),
  images: Array.from({ length: 10 }, () => faker.image.url()),
  name: faker.person.fullName({ min: 2, max: 12 }),
  desc: faker.lorem.sentence({ min: 500, max: 1000 }),
  people: faker.number.int({ min: 0, max: 1000000 }),
  money: faker.number.int({ min: 0, max: 1000000 }),
  likeCnt: faker.number.int({ min: 0, max: 1000000 }),
  isLike: faker.datatype.boolean(),
}));

export const posts = Array.from({ length: 30 }, () => ({
  postId: faker.string.uuid(),
  images: Array.from({ length: 10 }, () => faker.image.url()),
  name: faker.person.fullName({ min: 2, max: 12 }),
  desc: faker.lorem.sentence({ min: 500, max: 1000 }),
  people: faker.number.int({ min: 0, max: 1000000 }),
  money: faker.number.int({ min: 0, max: 1000000 }),
  likeCnt: faker.number.int({ min: 0, max: 1000000 }),
  isLike: faker.datatype.boolean(),
}));
