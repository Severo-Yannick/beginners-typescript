interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUserSolution = (): User => {
  return {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    role: "admin",
    posts: [
      {
        id: 1,
        title: "How I eat so much cheese",
      },
      {
        id: 2,
        title: "Why I don't eat more vegetables",
      },
    ],
  };
};
