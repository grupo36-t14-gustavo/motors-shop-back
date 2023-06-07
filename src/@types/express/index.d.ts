declare global {
  namespace Express {
    interface Request {
      users: {
        id: string;
     
      };
    }
  }
}
export { };

