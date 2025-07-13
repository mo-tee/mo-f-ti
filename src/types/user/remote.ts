export interface GetUserRes {
  code: string;
  message: string;
  data: {
    name: string;
    email: string;
    picture: string;
    point: number;
  };
}
