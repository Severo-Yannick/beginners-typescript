export interface Identifiable {
  id: string;
}

export interface User extends Identifiable {
  firstName: string;
  lastName: string;
}

export interface Post extends Identifiable {
  title: string;
  body: string;
}

export interface Comment extends Identifiable {
  comment: string;
}
