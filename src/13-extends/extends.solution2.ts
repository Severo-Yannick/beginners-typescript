type Identifiable2 = {
  id: string;
};

type User2 = Identifiable2 & {
  firstName: string;
  lastName: string;
};

type Post2 = Identifiable2 & {
  title: string;
  body: string;
};

type Comment2 = Identifiable2 & {
  comment: string;
};
