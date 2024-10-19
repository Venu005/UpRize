export interface CreateUser {
  id: string;
  email: string;
  imageUrl: string;
  name: string;
  username: string;
}

export interface UpdateUser {
  id: string;
  user: {
    imageUrl: string;
    name: string;
  };
}
