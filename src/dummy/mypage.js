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

export const POSTS = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),

  profile: {
    image: faker.image.url(),
    nickname: faker.person.fullName({ min: 2, max: 12 }),
    location: faker.location.city(),
    project: faker.lorem.word({ min: 2, max: 20 }),
    organization: faker.lorem.word({ min: 10, max: 12 }),
    isFollow: faker.datatype.boolean(),
  },
  content: {
    images: Array.from({ length: 10 }, () => faker.image.url()),
    likeCnt: faker.number.int({ min: 0, max: 1000000 }),
    title: faker.lorem.word({ min: 10, max: 30 }),
    body: faker.lorem.sentence(),
  },
  nickname: faker.person.fullName({ min: 2, max: 12 }),
  location: faker.location.city(),
  project: faker.lorem.word({ min: 2, max: 20 }),
  organization: faker.lorem.word({ min: 10, max: 12 }),
  isFollow: faker.datatype.boolean(),

  images: Array.from({ length: 10 }, () => faker.image.url()),
  likeCnt: faker.number.int({ min: 0, max: 1000000 }),
  title: faker.lorem.word({ min: 10, max: 30 }),
  desc: faker.lorem.sentence(),
}));
