export type User = {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

export const getUserId = (user: User) => {
  return user.id;
};